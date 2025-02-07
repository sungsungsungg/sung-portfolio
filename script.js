"use strict";

const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  for (let i = 0; i < modal.length; i++) {
    modal[`${i}`].classList.add("hidden");
  }

  overlay.classList.add("hidden");
};

const openModal = function (i) {
  modal[`${i}`].classList.remove("hidden");
  overlay.classList.remove("hidden");
};

console.log(btnsModal.length);
for (let i = 0; i < btnsModal.length; i++) {
  btnsModal[i].addEventListener("click", function () {
    openModal(i);
  });
}

for (let i = 0; i < btnsModal.length; i++) {
  btnCloseModal[i].addEventListener("click", closeModal);
}

// btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
