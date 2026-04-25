const dropdown = document.querySelector(".currency-dropdown");
const selected = dropdown.querySelector(".selected");
const options = dropdown.querySelector(".options");

selected.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", () => {
    const imgSrc = option.querySelector("img").src;
    const text = option.querySelector("span").innerText;

    selected.querySelector("img").src = imgSrc;
    selected.querySelector("span").innerText = text;

    options.style.display = "none";
  });
});
