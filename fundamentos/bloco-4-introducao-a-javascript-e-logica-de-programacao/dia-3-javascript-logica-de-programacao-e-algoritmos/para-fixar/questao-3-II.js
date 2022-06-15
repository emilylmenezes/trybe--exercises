let array = ["java", "javascript", "python", "html", "css"];
let maiorPalavra = array[0];

for (let cont = 0; cont < array.length; cont++) {
  if (array[cont].length < maiorPalavra.length) {
    maiorPalavra = array[cont];
  }
}

console.log(maiorPalavra);
