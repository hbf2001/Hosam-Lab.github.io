const usernameField = document.getElementById("username");
const usernameError = document.getElementById("username-error");

const emailField = document.getElementById("email");
const emailError = document.getElementById("email-error");
//Email Format
const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const passwordField = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const confirmPassField = document.getElementById("confirmpass");
const confirmPassError = document.getElementById("confirmpass-error");

const submitButton = document.querySelector("button");
       
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    //Resets any previous error messages
    usernameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPassError.innerHTML = "";
        
     //Validation checks for all inputs
    if (usernameField.value === "") {
        usernameError.innerHTML = "Please enter a valid Username.";
        usernameField.classList.remove("success");//removing the class success if the user input is not applicable
        usernameField.classList.add("error");//adding the error class to the username input.
        event.preventDefault(); //Preventing form submission
    } else {
        usernameField.classList.remove("error");
        /*if validated then remove the error class and add 
        the success class*/
        usernameField.classList.add("success");
    }
        
    if (emailField.value === "" || !emailFormat.test(emailField.value)) {
        emailError.innerHTML = "Please enter a valid email.";
        emailField.classList.remove("success");
        emailField.classList.add("error");
        event.preventDefault(); 
    } else {
        emailField.classList.remove("error");
        emailField.classList.add("success");
    }
        
    if (passwordField.value === "") {
        passwordError.innerHTML = "Please enter a password.";
        passwordField.classList.remove("success");
        passwordField.classList.add("error");
        event.preventDefault(); 
    } else if (passwordField.value.length < 8) {
        passwordError.innerHTML = "Password should be at least 8 characters long.";
        passwordField.classList.remove("success");
        passwordField.classList.add("error");
        event.preventDefault(); 
    } else {
        passwordField.classList.remove("error");
        passwordField.classList.add("success");
    }
        
    if (confirmPassField.value === "") {
        confirmPassError.innerHTML = "Confirm your Password.";
        confirmPassField.classList.remove("success");
        confirmPassField.classList.add("error");
        event.preventDefault(); 
    } else if (confirmPassField.value !== passwordField.value) {
        confirmPassError.innerHTML = "Password does not match.";
        confirmPassField.classList.remove("success");
        confirmPassField.classList.add("error");
        event.preventDefault(); 
    } else {
        confirmPassField.classList.remove("error");
        confirmPassField.classList.add("success");
    }
});
    

    
    
