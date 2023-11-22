// Requiring the needed modules and starting a server
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');

// Setting up the middleware
app.use(cookieParser()); // Use cookie-parser middleware

// Loading environment variables from privInfo.env file
const dotenv = require('dotenv');
dotenv.config({path: './privInfo.env'});

// Path module for handling file paths
const path = require('path');

// MySQL connection configuration
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// Connecting to MySQL database
db.connect((error) => {
    if(error){
        console.log(error)
    } else {
        console.log('Mysql Connected...');
    }
});

// Defining the path for the public directory (serving static files like CSS, images)
const publicDirectory = path.join(__dirname, './public');

// Setting up middleware to serve static files from the public directory
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');
app.use(express.json());

// Parse incoming URL-encoded requests
app.use(express.urlencoded({extended: true}));

// Defining the path for the views directory (containing Handlebars templates)
const viewsDirectory = path.join(__dirname, './views');

// Setting up middleware to serve static files from the views directory
app.use(express.static(viewsDirectory));

// Setting up additional middleware to serve static files (if needed)
app.use(express.static('public'));

// Define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

// Starting the server and listening on port 8000
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
