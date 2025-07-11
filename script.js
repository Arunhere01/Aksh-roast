const slides = document.querySelectorAll(".slide");
const startBtn = document.getElementById("startBtn");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
const nextBtns = document.querySelectorAll(".nextBtn");

let currentSlide = 0;
let userName = "";

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.add("hidden");
    if (i === n) slide.classList.remove("hidden");
  });
}

startBtn.addEventListener("click", () => {
  userName = nameInput.value.trim() || "Motuu";
  greeting.textContent = `Namaste ${userName}, kaise ho? Chalo thoda mazaak karte hain 😂`;
  currentSlide++;
  showSlide(currentSlide);
});

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentSlide++;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);
