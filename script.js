const text = "What's your name, my love?";
let i = 0;
const typingSpeed = 60;
const typingTarget = document.getElementById("typing-text");

function typeWriter() {
  if (i < text.length) {
    typingTarget.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  }
}

window.onload = () => {
  typeWriter();
};
