const NameInput = document.querySelector("#name-input");
const NameOutput = document.querySelector("#name-output");

NameInput.addEventListener("input", onInput);

function onInput(event) {
  const enteredName = NameInput.value;
  if (enteredName !== "") {
    NameOutput.textContent = enteredName;
  } else {
    NameOutput.textContent = "Anonymous";
  }
}
