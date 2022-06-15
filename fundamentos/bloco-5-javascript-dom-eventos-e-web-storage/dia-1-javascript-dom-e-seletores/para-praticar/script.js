/*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
*/

//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function mudarTexto(){
    const texto = document.getElementsByTagName('p')[1];
    texto.innerHTML = ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, in culpa! Repellendus blanditiis sunt corrupti. Cumque dolores in ratione quibusdam provident iste sit ab autem voluptates commodi! Nesciunt, veritatis odio?';
}
mudarTexto();

//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function mudandoBackground() {
    let corVerde = document.getElementsByClassName('main-content')[0];
    corVerde.style.backgroundColor = "green";
}
mudandoBackground()

//  Crie uma função que mude a cor do quadrado vermelho para branco.

function redParaWhite(){
    let corBranca = document.getElementsByClassName('center-content')[0];
    corBranca.style.backgroundColor = 'white';
}
redParaWhite()

// Crie uma função que corrija o texto da tag <h1>.

function titulo(){
    let textoTitulo = document.getElementsByTagName('h1')[0];
    textoTitulo.innerHTML = 'Exercício 5.1 - JavaScript';
}
titulo();

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function transformarMaiusculo(){
    let texto = document.getElementsByTagName('p')[0];
   texto.innerHTML = texto.innerHTML.toUpperCase();
}
transformarMaiusculo()

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function imprimir(){
    let textoConsole = document.getElementsByTagName('p');
    for(let i = 0; i < textoConsole.length; i++){
        console.log(textoConsole[i].innerHTML);
    }
}

imprimir()