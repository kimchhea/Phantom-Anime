document.addEventListener("DOMContentLaodes", function () {
  const form = document.querySelector("form");
  const input = document.querySelectorAll("input");
  function ShowError(input) {
    input.ClassList.add("is-invalid");
    input.ClassList.remove("is-valid");
  }
  function ShowSuccess(input) {
    input.ClassList.add("is-valid");
    input.ClassList.remove("is-invalid");
  }

  function ValidatInput() {
    const value = input.value.trim();
    let valid = true;
    if (id.input === "name") {
      if (value === "") {
        ShowError(input);
        valid = false;
      } else {
        ShowSuccess(input);
      }
    }
  }
});
