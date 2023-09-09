const regionInput = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

regionInput.addEventListener("input", changeFontSize);
function changeFontSize() {
  textElement.style.fontSize = regionInput.value + 'px';
}
