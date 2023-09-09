const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const dataForm = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    console.log(dataForm);
    form.reset();
  }
}

