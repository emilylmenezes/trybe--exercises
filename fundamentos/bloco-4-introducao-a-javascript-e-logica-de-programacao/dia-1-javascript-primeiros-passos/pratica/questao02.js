const a = 10;
const b = 5;

let resultado = Math.max(a, b);

console.log(resultado);

function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maiorNumero(a, b));