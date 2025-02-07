"use strict";

// const element = document.getElementById("box");

// element.scrollIntoView();
// element.scrollIntoView(false);
// element.scrollIntoView({ block: "end" });
// element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

// const goToTop = document.getElementById("go-to-top");
// const goToBottom = document.getElementById("go-to-bottom");

// goToBottom.addEventListener("click", () => {
//   goToTop.scrollIntoView({ behavior: "instant", block: "end" });
// });

//Section
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const portfolio = document.querySelector("#portfolio");
const contact = document.querySelector("#contact");

//navButtons
const goToHome = document.getElementById("home-button");
const goToAbout = document.getElementById("about-button");
const goToSkills = document.getElementById("skills-button");
const goToPortfolio = document.getElementById("portfolio-button");
const goToContact = document.getElementById("contact-button");

goToHome.addEventListener("click", () => {
  home.scrollTo(0, 0);
});

goToAbout.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

goToSkills.addEventListener("click", () => {
  skills.scrollIntoView({ behavior: "smooth" });
});
goToPortfolio.addEventListener("click", () => {
  portfolio.scrollIntoView({ behavior: "smooth" });
});
goToContact.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

//hi

const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  console.log(modal.length);
  for (let i = 0; i < modal.length; i++) {
    modal[`${i}`].classList.add("hidden");
  }

  overlay.classList.add("hidden");
};

const openModal = function (i) {
  console.log(i);
  //   document.querySelector(`.modal-${i}`).classList.remove("hidden");
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
