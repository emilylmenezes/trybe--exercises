let word = 'tryber';
let separandoLetras = word.split("");
let invertendo = separandoLetras.reverse();
let juntandoAsLetras = invertendo.join("");

console.log(juntandoAsLetras);

// Eu poderia fazer assim: 


let invertendoLetras = word.split("").reverse().join("");

console.log(invertendoLetras);
