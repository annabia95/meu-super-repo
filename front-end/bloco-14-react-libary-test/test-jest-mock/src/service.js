/* 1. Crie uma função que gere um número aleatório
Defina uma função que gere um número aleatório entre 0 e 100.
Desenvolva os testes para essa função.
Utilize o mock e defina o retorno padrão como 10.
Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada. */

const retornaNumeroAleatorio = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 

console.log(retornaNumeroAleatorio(1,100));


module.exports = { retornaNumeroAleatorio };