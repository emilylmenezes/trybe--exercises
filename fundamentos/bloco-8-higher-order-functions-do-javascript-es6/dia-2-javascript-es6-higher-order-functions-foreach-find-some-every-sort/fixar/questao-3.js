const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const aux = names.find(element => element.length === 5);
  return aux;
}

console.log(findNameWithFiveLetters());