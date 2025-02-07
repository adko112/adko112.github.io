document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");
  const button = document.querySelector(".button");
  const text = document.querySelector(".text");

  const animateStart = () => {
    container.classList.add("animating");
    button.innerHTML = "+";

    text.innerHTML = "";

    setTimeout(() => {
      text.innerHTML = "Cat is pondering your question..."
    }, 3300);

    setTimeout(() => {
      text.innerHTML = "Cat has an answer"
    }, 11300);

    setTimeout(() => {
      text.innerHTML = "Cat will now speak"
    }, 13300);

    setTimeout(() => {
      text.innerHTML = ""
    }, 15300);
  }

  button.addEventListener("click", animateStart);
});
