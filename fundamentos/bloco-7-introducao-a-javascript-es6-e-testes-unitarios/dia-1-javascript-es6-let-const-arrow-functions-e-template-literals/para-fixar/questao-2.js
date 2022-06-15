let contador = 0;
let maior = '';

const longestWord = string => {
    let array = string.split(' ');

    for (const index of array) {
        if (index.length > contador) {
            contador = index.length;
            maior = index;
        }
    }

    return maior;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));