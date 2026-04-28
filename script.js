const currencySelect = document.getElementById("currency");
const flagImg = document.getElementById("countryFlag");

currencySelect.addEventListener("change", function () {
  const value = this.value;

  if (value === "USD") {
    flagImg.src = "./assets/flags/usa.png";
  } else if (value === "INR") {
    flagImg.src = "./assets/flags/ind.png";
  } else if (value === "GBP") {
    flagImg.src = "./assets/flags/uk.png";
  }
});
