let cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = 'green'

let telaDeFundo = document.getElementsByClassName('emergency-tasks')[0];
telaDeFundo.style.backgroundColor = '#fc9f83'

let divs = document.querySelectorAll('.emergency-tasks h3');
for(let i = 0; i < divs.length; i++){
divs[i].style.backgroundColor = '#ac7ef3'
}

let segundaTelaDeFundo = document.getElementsByClassName('no-emergency-tasks')[0];
segundaTelaDeFundo.style.backgroundColor = 'yellow'


let outraDiv = document.querySelectorAll('.no-emergency-tasks h3');
for(let i = 0; i < outraDiv.length; i++){
outraDiv[i].style.backgroundColor = 'black'
}

let rodape = document.getElementById('footer-container')
rodape.style.backgroundColor = '#083534'

