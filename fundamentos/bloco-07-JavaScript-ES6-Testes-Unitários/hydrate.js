function hydrate(stringBebidas) {
    let sum = 0;
    let regex = /\d+/g;
    let num = stringBebidas.match(regex);
    // Usei o JSON.parse para transformar as strings dentro da minha array em números. Link: https://stackoverflow.com/questions/13272406/convert-string-with-commas-to-array/13272436
    let arrayNumber = JSON.parse("[" + num + "]");
    // Agora que já tenho uma array composta pelos números de cada bebida, preciso somá-los!
    for (let index = 0; index < arrayNumber.length; index += 1) {
      sum += arrayNumber[index];
    }
    if (sum > 1) {
      return sum + ' copos de água';
    } else {
      return sum + ' copo de água';
    }
  }
  module.exports = hydrate