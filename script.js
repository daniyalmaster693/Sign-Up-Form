document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.querySelector(".name-input");
  const nameError = document.querySelector(".name-error");
  const emailInput = document.querySelector(".email-input");
  const emailError = document.querySelector(".email-error");
  const passwordInput = document.querySelector(".password-input");
  const passwordError = document.querySelector(".password-error");
  const privacyError = document.querySelector(".privacy-error");
  const privacyCheck = document.querySelector(".privacy-check");
  const signUp = document.querySelector(".sign-up");

  function displayErrors() {
    if (nameInput.value === "") {
      nameInput.classList.add("error");
      nameError.style.opacity = "1";
    } else {
      nameInput.classList.remove("error");
      nameError.style.opacity = "0";
    }

    if (!privacyCheck.checked) {
      privacyError.style.opacity = "1";
    } else {
      privacyError.style.opacity = "0";
    }

    emailRequirements();
    passwordRequirements();
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

  function passwordRequirements() {
    const passwordLength = passwordInput.value.length;

    if (passwordInput.value === "") {
      passwordError.textContent = "*This field is required";
      passwordInput.classList.add("error");
      passwordError.style.opacity = "1";
      passwordError.style.left = "295px";
    } else if (passwordLength < 4) {
      passwordError.textContent = "Password must be longer then 4 characters";
      passwordInput.classList.add("error");
      passwordError.style.opacity = "1";
      passwordError.style.left = "170px";
    } else {
      passwordInput.classList.remove("error");
      passwordError.style.opacity = "0";
    }
  }

  signUp.addEventListener("click", displayErrors);
});
