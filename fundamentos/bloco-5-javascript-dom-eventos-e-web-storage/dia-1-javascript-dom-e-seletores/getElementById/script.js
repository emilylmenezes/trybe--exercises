const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

// 1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

document.getElementById('page-title').innerText = "Harry Potter";
const titulo = document.getElementById("page-title");
titulo.style.color = "blue";

// 2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

document.getElementById('second-paragraph').innerText = 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.';
const segundoParagrafo = document.getElementById('second-paragraph');
segundoParagrafo.style.color = 'black';

// 3. Por fim, recupere o subtítulo e altere-o também.

document.getElementById('subtitle').innerText = 'Melhor filme do mundo';
const subtitulo = document.getElementById('subtitle');
subtitulo.style.color = 'green';