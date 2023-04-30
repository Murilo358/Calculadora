export function themeSwitcher() {
  const main = document.querySelector("main");

  document
    .getElementById("toggle-switch")
    .addEventListener("click", function () {
      main.classList.toggle("dark");
      main.classList.toggle("light");
    });
}
