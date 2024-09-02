const slider = document.getElementById("lengthSlider");
const counter = document.querySelector(".counter");
const placeholder = document.querySelector(".placeholder");
const bars = document.querySelectorAll(".bar");
const button = document.querySelector("button");

placeholder.style.opacity = "0.5";
placeholder.textContent = "A05+½1d";

slider.addEventListener("input", function () {
  const value = Math.floor(slider.value / 5);
  counter.textContent = value;
});

button.addEventListener("click", function () {
  const length = Math.floor(slider.value / 5);
  const resultDiv = document.querySelector(".placeholder");

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let charset = "";
  if (document.querySelectorAll(".checkbox-container input")[0].checked)
    charset += uppercase;
  if (document.querySelectorAll(".checkbox-container input")[1].checked)
    charset += lowercase;
  if (document.querySelectorAll(".checkbox-container input")[2].checked)
    charset += numbers;
  if (document.querySelectorAll(".checkbox-container input")[3].checked)
    charset += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(
      Math.floor(Math.random() * charset.length)
    );
  }
  resultDiv.textContent = password || "Please select options";

  bars.forEach((bar) => (bar.style.backgroundColor = "transparent"));

  let strengthScore = 0;
  document
    .querySelectorAll(".checkbox-container input")
    .forEach((checkbox) => {
      if (checkbox.checked) strengthScore += 1;
    });

  for (let i = 0; i < strengthScore; i++) {
    if (bars[i]) {
      bars[i].style.backgroundColor = "rgb(76, 177, 118)";
    }
  }
  placeholder.style.opacity = "1";
});