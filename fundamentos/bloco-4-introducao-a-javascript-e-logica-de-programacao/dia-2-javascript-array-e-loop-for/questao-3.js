// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

function calcularMedia(){
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = 0;

for(let i of numbers){
    aux += i
}

let media = aux / numbers.length;

return media;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
}

console.log(calcularMedia())


