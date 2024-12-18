function validateForm(event) {
    // Prevent form submission
    event.preventDefault();

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if username and password are not empty
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        errorMessage.style.color = "red";  // Ensuring error message is visible
        return false;
    }

    // Dummy validation for demo purposes
    if (username === "test" && password === "test") {
        // Clear error message if login is successful
        errorMessage.textContent = "";
        
        // Redirect to the next page (homepage)
        window.location.href = "homepage.html"; // Change to your desired next page URL
        return true;
    } else {
        // Show error message for invalid credentials
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.color = "red";  // Ensuring error message is visible
        return false;
    }
}

// Attach the validation function to the form submit event
document.getElementById('loginForm').addEventListener('submit', validateForm);

// Function to handle logout
function logout() {
    // If you're using sessionStorage or localStorage, you can clear it
    // sessionStorage.clear(); // Clears session storage
    // localStorage.clear(); // Clears local storage

    // Redirect to login page
    window.location.href = "index.html";  // Change to the path of your login page
}
