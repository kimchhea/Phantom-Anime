document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input"); // Get all input fields inside the form
  
    // Function to show error message if validation fails
    function showError(input) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
    }
  
    // Function to show success message when validation passes
    function showSuccess(input) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
    }
  
    // Function to validate each input field
    function validateInput(input) {
      const value = input.value.trim(); // Remove any spaces around the input value
      let isValid = true;
  
      if (input.id === "name") {
        if (value === "") {
          showError(input);
          isValid = false;
        } else {
          showSuccess(input);
        }
      }
      if (input.id === "email") {
        if (value === "") {
          showError(input);
          isValid = false;
        } else if (!value.includes("@") || !value.includes(".")) {
          showError(input);
          isValid = false;
        } else {
          showSuccess(input);
        }
      }
  
      if (input.id === "passwords") {
        if (value === "") {
          showError(input);
          isValid = false;
        } else {
          showSuccess(input);
        }
      }
  
      if (input.id === "confirm-pw") {
        const password = document.getElementById("passwords").value;
        if (value === "") {
          showError(input);
          isValid = false;
        } else if (value !== password) {
          showError(input);
          isValid = false;
        } else {
          showSuccess(input);
        }
      }
  
      return isValid;
    }
    // Validate input in real-time as the user types
    inputs.forEach(function(input) {
      input.addEventListener("input", function() {
        validateInput(input);
      });
    });
    // When the form is submitted, check all fields
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from being submitted immediately
  
      let formIsValid = true; // Assume the form is valid initially
  
      // Check each input field and validate it
      inputs.forEach(function(input) {
        if (!validateInput(input)) {
          formIsValid = false; // If any input is invalid, mark the form as invalid
        }
      });
  
      // If all inputs are valid, show success message
      if (formIsValid) {
        alert("Account created successfully!");
        form.reset(); // Reset the form
        inputs.forEach(function(input) {
          input.classList.remove("is-valid", "is-invalid"); // Remove any validation styles
        });
      }
    });
  });
  