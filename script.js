
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  toggle.textContent = isLight ? "🌙" : "☀️";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  toggle.textContent = "🌙";
}
