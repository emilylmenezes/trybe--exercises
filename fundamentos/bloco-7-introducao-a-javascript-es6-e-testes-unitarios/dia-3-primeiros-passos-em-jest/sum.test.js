const sum = require('./sum.js');

describe('testa a função sum', () => {
  it('Retornar a soma', () => expect(sum(3, 5)).toBe(8));
  it('Mensagem de erro', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})