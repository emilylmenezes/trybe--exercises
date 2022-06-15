let contador = 1;

const fatorial = (valor) => {
    for (let index = valor; index > 0; index -= 1) {
        contador *= index;
    };

    return contador;
}

console.log(fatorial(6));