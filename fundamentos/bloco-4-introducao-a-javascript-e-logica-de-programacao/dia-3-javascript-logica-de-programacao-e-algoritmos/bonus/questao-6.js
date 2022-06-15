let elemento = 1;
let numero = 31;

for (let contador = 2; contador <= numero; contador++) {
  if(numero % contador === 0){
      elemento++;
  }
}

console.log(elemento === 2 ? 'É primo': 'Não é primo')

