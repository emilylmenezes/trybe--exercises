// Ao chamar a função doingThings:

const doingThings= (string, action) => {
    action(string)
}
doingThings('Bora tomar café!!', console.log);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
