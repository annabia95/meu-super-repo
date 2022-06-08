const { expect } = require('chai');

const avaliaNumero = require('../functionNumber');

describe("Avalia se o número é positivo, negativo ou neutro", () => {
  it('retorna positivo', () => {
    const resposta = avaliaNumero(4);
    expect(resposta).to.be.equals('positivo')
  });

  it('retorna neagativo', () => {
    const resposta = avaliaNumero(-1);
    expect(resposta).to.be.equals('negativo')
  });

  it('retorna neutro', () => {
    const resposta = avaliaNumero(0);
    expect(resposta).to.be.equals('neutro')
  });
})

describe("Avalia se a função recebe um número ou não", () => {

  it('retorna "o valor deve ser um número"', () => {
    const resposta = avaliaNumero(!Number);
    expect(resposta).to.be.equals('o valor deve ser um número')
  });

})