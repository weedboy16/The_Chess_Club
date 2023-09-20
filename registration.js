// registration.js

// Initialize a global variable to store registration data
let registrationData = {};

document.addEventListener("DOMContentLoaded", function () {
    // Registration form event listener
    document.querySelector("#registrationForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get the values entered by the user for registration
        const registrationUsername = document.getElementById("username").value;
        const registrationPassword = document.getElementById("password").value;

        // Create a JSON object to store registration data
        registrationData = {
            username: registrationUsername,
            password: registrationPassword,
        };

        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;


        alert("Registration successful!");
        window.location.href = "Success_Page.html";

    });
});
