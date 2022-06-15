const aside = document.querySelector('.placar');
const button = document.querySelector('.botao');
let contador = 0;

const evento = button.addEventListener("click", () => aside.textContent = contador++);