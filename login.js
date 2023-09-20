// login.js

document.addEventListener("DOMContentLoaded", function () {
    // Login form event listener
    document.querySelector("#loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get the values entered by the user for login
        let loginUsername = document.getElementById("login_username").value;
        let loginPassword = document.getElementById("login_password").value;


        let isValidLogin = false;

        // Checking if the entered credentials match any of the stored registration data
        if (registrationData && registrationData.username === loginUsername && registrationData.password === loginPassword) {
            isValidLogin = true;
        }

        // Check if login is valid
        if (isValidLogin) {

            alert("Login successful!");
            window.location.href = "Success_Page.html";
        } else {
            // Display an error message for invalid login
            alert("Invalid login credentials. Please try again.");
        }
    });
});
