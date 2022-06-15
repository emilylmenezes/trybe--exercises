// 2. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
document.getElementsByClassName('paragraph');

// 3. Altere algum estilo do primeiro deles.

let paragrafo = document.getElementsByClassName('paragraph');
paragrafo[0].style.color = 'blue';

// 4. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName

let subtitulo = document.getElementsByTagName("h4");

for (let i = 0; i < subtitulo.length; i++) {
  subtitulo[i].style.color = "red";
}