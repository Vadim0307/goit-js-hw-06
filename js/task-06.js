const input = document.querySelector("#validation-input");

input.addEventListener("blur", analysis);

function analysis() {
  const dataLength = Number.parseInt(input.getAttribute("data-length"));
  
  if (input.value.trim().length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
