// Ao chamar a função doingThings:
const doingThings = (wakeUp, action) => {
  action(wakeUp);
}

doingThings('Acordando!!', console.log);
doingThings('Bora tomar café!!', console.log);
doingThings('Partiu dormir!!', console.log);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!