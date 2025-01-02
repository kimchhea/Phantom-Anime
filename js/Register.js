document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input"); // Get all input fields inside the form

  // Function to show error message if validation fails
  function showError(input, message) {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    const errorSpan = input.nextElementSibling; // Assuming an error message span exists after the input
    if (errorSpan) {
      errorSpan.textContent = message; // Set the error message
    }
  }

  // Function to show success message when validation passes
  function showSuccess(input) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    const errorSpan = input.nextElementSibling; // Assuming an error message span exists after the input
    if (errorSpan) {
      errorSpan.textContent = ""; // Clear any error message
    }
  }

  // Function to validate each input field
  function validateInput(input) {
    const value = input.value.trim(); // Remove any spaces around the input value
    let isValid = true;

    if (input.id === "name") {
      if (value === "") {
        showError(input, "Name cannot be empty.");
        isValid = false;
      } else {
        showSuccess(input);
      }
    }

    if (input.id === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
      if (value === "") {
        showError(input, "Email cannot be empty.");
        isValid = false;
      } else if (!emailPattern.test(value)) {
        showError(input, "Please enter a valid email address.");
        isValid = false;
      } else {
        showSuccess(input);
      }
    }

    if (input.id === "passwords") {
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Strong password pattern
      if (value === "") {
        showError(input, "Password cannot be empty.");
        isValid = false;
      } else if (!passwordPattern.test(value)) {
        showError(
          input,
          "Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character."
        );
        isValid = false;
      } else {
        showSuccess(input);
      }
    }

    if (input.id === "confirm-pw") {
      const password = document.getElementById("passwords").value;
      if (value === "") {
        showError(input, "Confirm Password cannot be empty.");
        isValid = false;
      } else if (value !== password) {
        showError(input, "Passwords do not match.");
        isValid = false;
      } else {
        showSuccess(input);
      }
    }

    return isValid;
  }

  // Validate input in real-time as the user types
  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      validateInput(input);
    });
  });

  // When the form is submitted, check all fields
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from being submitted immediately

    let formIsValid = true; // Assume the form is valid initially

    // Check each input field and validate it
    inputs.forEach(function (input) {
      if (!validateInput(input)) {
        formIsValid = false; // If any input is invalid, mark the form as invalid
      }
    });

    // If all inputs are valid, redirect to the main page
    if (formIsValid) {
      alert("Account created successfully!");
      // Redirect to the main page
      window.location.href = "index.html";
    }
  });
});
