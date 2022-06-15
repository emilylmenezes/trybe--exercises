let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;

for (let i of numbers) {
  if (i % 2 !== 0) {
    cont++;
  }
}

if (cont === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(cont);
}
