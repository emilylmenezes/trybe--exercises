// Ao chamar a função doingThings:

const doingThings= (string, action) => {
    action(string)
}
doingThings('Partiu dormir!!', console.log);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
