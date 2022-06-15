const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array) {
  return array.reduce((acumulador, index) => acumulador.concat(index), []);
}

console.log(flatten(arrays))