const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => {
    return a > b ? 1 : -1
});

console.log(oddsAndEvens); // será necessário alterar essa linha 😉