function validateForm() {
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function (error) {
        error.textContent = "";
    });

    // Validate Full Name
    let fullName = document.getElementById("fullName").value;
    if (fullName === "") {
        document.getElementById("fullNameError").textContent = "Full Name is required.";
        valid = false;
    }

    // Validate Email
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        valid = false;
    }

    // Validate Password
    let password = document.getElementById("password").value;
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        valid = false;
    }

    // Validate Username
    let username = document.getElementById("username").value;
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required.";
        valid = false;
    }

    // Validate Phone Number
    let phone = document.getElementById("phone").value;
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").textContent = "Please enter a valid phone number.";
        valid = false;
    }

    // Validate Confirm Password
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        valid = false;
    }

    // Validate Gender
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        valid = false;
    }

    return valid; // If validation fails, form submission is prevented
}



