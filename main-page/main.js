function submit() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("passwords");
    const confirmPwInput = document.getElementById("confirm-pw");
  
    const Name = nameInput.value.trim();
    const Email = emailInput.value.trim();
    const Password = passwordInput.value.trim();
    const ConfirmPasswords = confirmPwInput.value.trim();
  
    // Reset validation styles
    nameInput.classList.remove("is-invalid");
    emailInput.classList.remove("is-invalid");
    passwordInput.classList.remove("is-invalid");
    confirmPwInput.classList.remove("is-invalid");
  
    let isValid = true;
  
    // Validate Name
    if (Name === "") {
      nameInput.classList.add("is-invalid");
      isValid = false;
    }
  
    // Validate Email
    if (Email === "") {
      emailInput.classList.add("is-invalid");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
      emailInput.classList.add("is-invalid");
      emailInput.nextElementSibling.textContent = "Invalid email format.";
      isValid = false;
    }
  
    // Validate Password
    if (Password === "") {
      passwordInput.classList.add("is-invalid");
      isValid = false;
    }
  
    // Validate Confirm Password
    if (ConfirmPasswords === "") {
      confirmPwInput.classList.add("is-invalid");
      isValid = false;
    } else if (ConfirmPasswords !== Password) {
      confirmPwInput.classList.add("is-invalid");
      confirmPwInput.nextElementSibling.textContent = "Passwords do not match.";
      isValid = false;
    }
  
    if (isValid) {
      alert("Account created successfully!");
      // Here you can add logic to send data to the server.
    }
  }
  