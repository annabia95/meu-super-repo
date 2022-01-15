const sum = require('./sum');

describe ('Requisito 1, 2, 3 e 4:', () => {
  it ('O retorno de sum(4, 5) é 9 e o retorno de sum(0, 0) é 0', () => {
  expect(sum(4,5)).toBe(9);
  expect(sum(0,0)).toBe(0);
  }
)
  it ('deve disparar um erro caso receba como parâmetro uma string', () => {
  expect(() => sum(4, '5')).toThrowError();
  expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  }
)});
