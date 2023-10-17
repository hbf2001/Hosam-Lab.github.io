//Getting the input element for the username and its div container for the error message display from the form.html.
const usernameField = document.getElementById("username");
const usernameError = document.getElementById("username-error");

//Getting the input element for the email and its div container for the error message display from the form.html.
const emailField = document.getElementById("email");
const emailError = document.getElementById("email-error");

//Email Format in RegEx Form.
const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//Getting the input element for the password and its div container for the error message display from the form.html.
const passwordField = document.getElementById("password");
const passwordError = document.getElementById("password-error");

//Getting the input element for the confirm password and its div container for the error message display from the form.html.
const confirmPassField = document.getElementById("confirmpass");
const confirmPassError = document.getElementById("confirmpass-error");

//Getting the submit button from the form.html.
const submitButton = document.querySelector("button");

//Getting the form from the form.html file.
const form = document.getElementById("myForm");


/*Function to validate an input field and handle error/success via html classes, constructed this function
to avoid duplication of code

This function takes in the field name, error element (div), and a condition statment to implement
the validatin. If condition is true it removes the success class and adds the error class and css styles
are apllied based on the class name*/
function validateInput(field, errorElement, errorMessage, condition) {
    if (condition) {
        errorElement.innerHTML = errorMessage;
        field.classList.remove("success");
        field.classList.add("error");
        if (field.parentElement) { //Check if there is a parent element
            field.parentElement.classList.remove("success");
            field.parentElement.classList.add("error");
        }
        return false;
    } else {
        errorElement.innerHTML = ""; //Clear any previous error message
        field.classList.remove("error");
        field.classList.add("success");
        if (field.parentElement) {
            field.parentElement.classList.remove("error");
            field.parentElement.classList.add("success");
        }
        return true;
    }
}

form.addEventListener("submit", function (event) {
    //Resets any previous error messages
    usernameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPassError.innerHTML = "";

    //boolean statement to check the validation status
    let isValid = true; 

    //Validation checks for all inputs
    //The &&isValid part is used to keep track of the form and check whether it is is valid or not as a whole.
    isValid = validateInput(usernameField, usernameError, "Please enter a valid Username.", usernameField.value === "") && isValid;

    isValid = validateInput(emailField, emailError, "Please enter a valid email.", emailField.value === "" || !emailFormat.test(emailField.value)) && isValid;

    isValid = validateInput(passwordField, passwordError, "Please enter a password.", passwordField.value === "") && isValid;

    //Validate password length only if it's not empty
    if (passwordField.value !== "") 
        isValid = validateInput(passwordField, passwordError, "Password should be at least 8 characters long.", passwordField.value.length < 8) && isValid;
    
    if (confirmPassField.value === "") {
        isValid = validateInput(confirmPassField, confirmPassError, "Confirm your Password.", confirmPassField.value === "") && isValid;
    } else {
        isValid = validateInput(confirmPassField, confirmPassError, "Password does not match.", confirmPassField.value !== passwordField.value) && isValid;
    }
    //Prevent site reload as requested in the sheet.
    event.preventDefault();   
});


    

    
    
