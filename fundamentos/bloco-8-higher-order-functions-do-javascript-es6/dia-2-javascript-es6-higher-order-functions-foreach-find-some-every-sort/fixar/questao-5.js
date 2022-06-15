const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((i) => i === name);


console.log(hasName(names, 'Ana'))