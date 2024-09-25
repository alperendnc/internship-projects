  document.getElementById("htmlButton").addEventListener("click", function () {
  document.querySelector(".genel").style.display = "none";
  document.querySelector(".genel2").classList.add("active");
  document.querySelector(".soru1-answers").style.display = "block";
});

const toggleSwitch = document.getElementById("toggleSwitch");
const toggleSwitch2 = document.getElementById("toggleSwitch2");

toggleSwitch.addEventListener("change", function () {
  document.body.style.backgroundColor = toggleSwitch.checked
    ? "gray"
    : "rgb(29, 29, 30)";
});

toggleSwitch2.addEventListener("change", function () {
  document.body.style.backgroundColor = toggleSwitch2.checked
    ? "gray"
    : "rgb(29, 29, 30)";
});

const questions = document.querySelectorAll(".sol2 strong");
const answerGroups = document.querySelectorAll(".cevap-grup");
let currentQuestionIndex = 0;

questions[currentQuestionIndex].style.display = "block";
const nextButtons = document.querySelectorAll(".cevap-grup button");

nextButtons.forEach((button) => {
  button.addEventListener("click", function () {
    questions[currentQuestionIndex].style.display = "none";
    answerGroups[currentQuestionIndex].style.display = "none";
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      questions[currentQuestionIndex].style.display = "block";
      answerGroups[currentQuestionIndex].style.display = "block";
    } else {
      alert("Quiz tamamlandı!");
      location.reload();
    }
    updateProgressBar();
  });
});
function updateProgressBar() {
  const progress = document.querySelector(".bar");
  const value = ((currentQuestionIndex + 1) / questions.length) * 100;
  progress.value = value;
}
