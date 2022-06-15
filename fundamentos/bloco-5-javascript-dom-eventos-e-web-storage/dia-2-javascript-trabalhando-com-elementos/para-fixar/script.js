// 1. Acesse o elemento elementoOndeVoceEsta
const ondeEstou = document.getElementById("primeiroFilho");

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const acessandoOPai = ondeEstou.parentElement;
acessandoOPai.style.color = "blue";

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
const alterandoTexto = ondeEstou.firstElementChild;
alterandoTexto.innerText = "Alterando texto";

// 4. Acesse o primeiroFilho a partir de pai.
const acessandoPrimeiroFilho = acessandoOPai.firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilhoDeOndeEstou = ondeEstou.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const acessandoTexto = ondeEstou.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const acessandoTerceiroFilho = ondeEstou.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
const filhoTerceiro = acessandoOPai.lastElementChild.previousElementSibling;
