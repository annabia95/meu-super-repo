const { expect } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

describe ('Requisito 1, 2, 3 e 4:', () => {
    it ('O retorno de myFizzBuz quando o número é divisivel por 3 e 5 é "fizzbuzz", só por 3 é "fizz" e só por 5 é "buzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    })
    it ('Nem por 3 e nem por 5, retorna o próprio número. Caso não seja um número retorna "false"', () => {
    expect(myFizzBuzz(22)).toBe(22);
    expect(myFizzBuzz('isso é uma string')).toBe(false);
    }
)});
  