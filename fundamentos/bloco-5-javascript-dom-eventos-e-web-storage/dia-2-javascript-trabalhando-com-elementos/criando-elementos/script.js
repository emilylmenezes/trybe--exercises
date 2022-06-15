// 1. Crie um irmão para `elementoOndeVoceEsta`.
const pai = document.getElementById("pai");
const criandoSecao = document.createElement("section");
criandoSecao.id = "irmaoDoElementoOndeVoceEsta";
pai.appendChild(criandoSecao);

// 2. Crie um filho para `elementoOndeVoceEsta`.
const principal = document.getElementById("elementoOndeVoceEsta");
const criandoFilho = document.createElement("section");
criandoFilho.id = "filhoElementoOndeVoceEsta";
principal.appendChild(criandoFilho);

// 3. Crie um filho para `primeiroFilhoDoFilho`.
const acessandoPrimeiroFilhoDoFilho = document.getElementById(
  "primeiroFilhoDoFilho"
);
const primeiroFilho = document.createElement("section");
primeiroFilho.id = "filhoPrimeiroFilhoDoFilho";
acessandoPrimeiroFilhoDoFilho.appendChild(primeiroFilho);

// 4. A partir desse filho criado, acesse `terceiroFilho`.
const terceiroFilho =
  filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling; 
console.log(terceiroFilho);
