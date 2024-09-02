const openModalButtons = document.querySelectorAll(".open-modal1, .open-modal2, .open-modal3"
);
const modals = document.querySelectorAll(".modal1, .modal2, .modal3");
const closeModalButtons = document.querySelectorAll(".close-modal, .close-modal2, .close-modal3"
);
openModalButtons.forEach((openBtn, index) => {
  openBtn.addEventListener("click", () => openModal(index));
});

closeModalButtons.forEach((closeBtn, index) => {
  closeBtn.addEventListener("click", () => closeModal(index));
});

function openModal(index) {
  modals[index].classList.add("visible");
}

function closeModal(index) {
  modals[index].classList.remove("visible");
}
function decreaseQuantity() {
  var quantityInput = document.getElementById("quantity");
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}
function increaseQuantity() {
  var quantityInput = document.getElementById("quantity");
  var currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}
