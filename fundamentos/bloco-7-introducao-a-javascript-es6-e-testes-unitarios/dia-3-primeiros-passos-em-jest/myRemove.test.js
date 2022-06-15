const flag = require('./myRemove.js');

describe('testando a função', () => {
  it('Saída correta?', () => {
    expect(flag([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(flag([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(flag([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});