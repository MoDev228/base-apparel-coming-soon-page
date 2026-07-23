const form = document.querySelector(".form");
const inputEmail = document.querySelector("#email");
const errorIcon = document.querySelector(".icon-error");
const errorMessage = document.querySelector(".message-error");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = inputEmail.value.trim();

  if (emailRegex.test(email)) {
    errorIcon.src;
    errorIcon.hidden = true;
    errorMessage.textContent = "Email Valid";
    errorMessage.style.color = "green";
    errorMessage.hidden = false;

    inputEmail.classList.remove("error");

    console.log("Email valide :", email);

    inputEmail.value = "";
  } else {
    errorIcon.hidden = false;
    errorMessage.hidden = false;

    inputEmail.classList.add("error");
    inputEmail.focus();
  }
});

inputEmail.addEventListener("input", () => {
  const email = inputEmail.value.trim();

  if (emailRegex.test(email)) {
    errorIcon.hidden = true;
    errorMessage.hidden = true;

    inputEmail.classList.remove("error");
  } else {
    errorIcon.hidden = false;
    errorMessage.hidden = false;

    inputEmail.classList.add("error");
  }
});
