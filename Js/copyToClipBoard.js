export function copyToClipboard() {
  const resultInput = document.querySelector("#result");
  document
    .getElementById("copyToClipboard")
    .addEventListener("click", function (ev) {
      const button = ev.currentTarget;
      if (button.innerText === "Copy") {
        button.innerText = "Copied!";
        button.classList.add("success");
        navigator.clipboard.writeText(resultInput.value);
      } else {
        button.innerText = "Copy";
        button.classList.remove("success");
      }
    });
}
