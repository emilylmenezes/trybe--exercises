// Atribuindo 10 a variável n, e será essa variável que utilizaremos como base para o fatorial
let n = 10;
// Declarei uma variável auxiliar para multiplicar os valores
let aux = n;
// Usei uma estrutura de repetição para causar correr do 1 ao 10
for (let i = 1; i < n; i++) {
    aux *= i;
}
console.log(aux);