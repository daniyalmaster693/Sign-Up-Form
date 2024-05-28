document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector(".email-input");
  const emailError = document.querySelector(".email-error");
  const warningError = document.querySelector(".warning-error");
  const warningCheck = document.querySelector(".warning-check");
  const resetPassword = document.querySelector(".reset");

  function displayErrors() {
    if (!warningCheck.checked) {
      warningError.style.opacity = "1";
    } else {
      warningError.style.opacity = "0";
    }

    function emailRequirements() {
      const atSymbol = "@";
      const emailIncludes = emailInput.value.includes(atSymbol);

      const dotCom = ".com";
      const emailEndingIncludes = emailInput.value.includes(dotCom);

      if (emailInput.value === "") {
        emailError.textContent = "*This field is required";
        emailInput.classList.add("error");
        emailError.style.opacity = "1";
        emailError.style.left = "295px";
      } else if (emailIncludes === false) {
        emailError.textContent = "Email must include @";
        emailInput.classList.add("error");
        emailError.style.opacity = "1";
      } else if (emailEndingIncludes === false) {
        emailError.textContent = "Email must be valid";
        emailInput.classList.add("error");
        emailError.style.opacity = "1";
        emailError.style.left = "305px";
      } else {
        emailInput.classList.remove("error");
        emailError.style.opacity = "0";
      }
    }

    emailRequirements();
  }

  resetPassword.addEventListener("click", displayErrors);
});
