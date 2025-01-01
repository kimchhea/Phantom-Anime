document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#loginForm");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  // Function to show error message
  function showError(input, message) {
    const feedback = input.nextElementSibling;
    input.classList.add("is-invalid");
    feedback.textContent = message;
  }

  // Function to clear error
  function showSuccess(input) {
    const feedback = input.nextElementSibling;
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedback.textContent = "";
  }

  // Email validation
  function validateEmail() {
    const value = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
      showError(emailInput, "Email cannot be empty.");
      return false;
    } else if (!emailPattern.test(value)) {
      showError(emailInput, "Please enter a valid email address.");
      return false;
    } else {
      showSuccess(emailInput);
      return true;
    }
  }

  // Password validation
  function validatePassword() {
    const value = passwordInput.value.trim();
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (value === "") {
      showError(passwordInput, "Password cannot be empty.");
      return false;
    } else if (!passwordPattern.test(value)) {
      showError(
        passwordInput,
        "Password must include uppercase, lowercase, numbers, and special characters."
      );
      return false;
    } else {
      showSuccess(passwordInput);
      return true;
    }
  }

  // Real-time validation
  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);

  // Form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      alert("Login successful!");
      window.location.href = "../main-page/index.html";
    }
  });
});
