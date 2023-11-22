const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const mysql = require('mysql');

// Creating a connection to the database
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// Handling user registration
exports.register = async (req, res) => {
    console.log(req.body);
    const { name, email, password, passwordConfirm } = req.body;

    // Checking if the email is already in use
    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, result) => {
        if (error) {
            console.log(error);
        }

        if (result.length > 0) {
            return res.render('register', {
                message: 'This email is already in use..'
            });
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                message: 'Password does not match..'
            });
        }
         // Hashing the password before storing it in the database
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        // Inserting user data into the database
        db.query('INSERT INTO users SET ?', { name: name, email: email, password: hashedPassword }, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
                return res.render('register', {
                    message: 'User registered'
                });
            }
        });
    });
};

// Implementing the login logic
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Checking if email and password are provided
        if (!email || !password) {
            return res.render('login', {
                message: 'Please provide both email and password.'
            });
        }

        // Querying the database for the user with the provided email
        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, result) => {
            if (error) {
                console.log(error);
            }

            if (result.length === 0 || !(await bcrypt.compare(password, result[0].password))) {
                return res.render('login', {
                    message: 'Email or password is incorrect.'
                });
            } else {
                // Creating a JWT token
                const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN,
                });

                // Setting JWT token as a cookie
                res.cookie('jwt', token, { httpOnly: true });

                // Rendering the profile page with user information
                res.render('profile', { user: result[0] });
            }
        });
    } catch (error) {
        console.log(error);
    }
};

// When Logging out user to be redirected to the log in page
exports.logout = (req, res) => {
    res.redirect('/login');
};

exports.isLoggedIn = async (req, res, next) => {
    try {
        // Checking if JWT token exists in cookies
        const token = req.cookies.jwt;

        if (token) {
            try {
                // Verify the token with JWT_SECRET
                const decoded = jwt.verify(token, process.env.JWT_SECRET);

                // Checking if the user associated with the token exists in the database
                db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (error, result) => {
                    if (error) {
                        console.log(error);
                        return res.redirect('/login'); // Redirect to the login page in case of an error
                    }

                    if (result.length === 0) 
                        return res.redirect('/login'); // Redirect to the login page if the user doesn't exist

                    // Attach user information to the request object
                    req.user = result[0];
                    return next(); // Proceed to the next middleware function
                });
            } catch (error) {
                console.log(error);
                return res.redirect('/login'); // Redirect to the login page in case of token verification failure
            }
        } else {
            return res.redirect('/login'); // Redirect to the login page if the token doesn't exist
        }
    } catch (error) {
        console.log(error);
        return res.redirect('/login'); // Redirect to the login page in case of an unexpected error
    }
};




