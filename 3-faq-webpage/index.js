const toggleButtons = document.querySelectorAll(".toggleButton");
toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.parentElement.nextElementSibling;
    const isActive = content.classList.contains("active");
    
    toggleButtons.forEach((btn) => {
      const otherContent = btn.parentElement.nextElementSibling;
      const icon = btn.querySelector("i");
      otherContent.classList.remove("active");
      otherContent.classList.add("hidden");
      icon.classList.remove("fa-minus-circle");
      icon.classList.add("fa-plus-circle");
    });
    if (!isActive) {
      content.classList.add("active");
      content.classList.remove("hidden");
      this.querySelector("i").classList.remove("fa-plus-circle");
      this.querySelector("i").classList.add("fa-minus-circle");
    } 
    else {
      content.classList.remove("active");
      content.classList.add("hidden");
      this.querySelector("i").classList.remove("fa-minus-circle");
      this.querySelector("i").classList.add("fa-plus-circle");
    }
  });
});