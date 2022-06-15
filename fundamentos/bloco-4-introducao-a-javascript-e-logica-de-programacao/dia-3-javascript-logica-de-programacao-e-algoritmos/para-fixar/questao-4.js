let resultado = 0;
let validandoNumero;

for (let i = 0; i <= 50; i++) {
  validandoNumero = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      validandoNumero = false
    }
  }
  switch(validandoNumero){
      case true:
      resultado = i;
  }
}

console.log(resultado);