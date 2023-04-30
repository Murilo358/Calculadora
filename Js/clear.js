export function clear() {
  document.getElementById("clear").addEventListener("click", function () {
    const resultInput = document.querySelector("#result");
    input.value = "";
    input.focus();
    resultInput.value = "";
    resultInput.classList.remove("error");
  });
}
