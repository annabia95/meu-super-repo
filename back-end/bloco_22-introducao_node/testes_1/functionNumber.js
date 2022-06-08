function avaliaNumber (n) {
  if(n > 0) return 'positivo';
  if(n < 0) return 'negativo';
  if(n === 0) return 'neutro';
  if(typeof(n) !== Number) return 'o valor deve ser um número'
}


module.exports = avaliaNumber;