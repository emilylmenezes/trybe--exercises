let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let auxiliar = numbers.length;

for (let i = 1; i < numbers.length; i++) {
   if (numbers[i] < auxiliar) {
      auxiliar = numbers[i];
   }
}

console.log(auxiliar);



