let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let auxiliar = 0;

for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] > auxiliar) {
      auxiliar = numbers[i];
   }
}

console.log(auxiliar);


// Outra forma: 

let aux = numbers.reduce(function(num, numero) {
    return Math.max(num, numero);
  });

  console.log(aux)