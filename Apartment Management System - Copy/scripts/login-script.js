document.addEventListener("DOMContentLoaded", function() {
  const registerLink = document.getElementById("register-link");
  const adminLink = document.getElementById("admin-link");
  const registerForm = document.querySelector(".register");
  const adminForm = document.querySelector(".admin");

  registerLink.addEventListener("click", function(event) {
    event.preventDefault();
    toggleFormVisibility(registerForm);
  });

  adminLink.addEventListener("click", function(event) {
    event.preventDefault();
    toggleFormVisibility(adminForm);
  });

  function toggleFormVisibility(form) {
    // Hide all forms except the form being toggled
    const allForms = document.querySelectorAll(".form-box");
    allForms.forEach(function(formElement) {
      if (formElement !== form) {
        formElement.style.display = "none";
      }
    });

    // Toggle the display of the clicked form
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }
});
