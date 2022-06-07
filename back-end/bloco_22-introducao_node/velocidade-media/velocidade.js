const readline = require('readline-sync');

function calculaVelocidade(distancia, tempo) {
  const velocidade = distancia /tempo;
  return velocidade;
}

// A função main é o ponto de partida do nosso programa 
function main() {
  const unidadeDeMedida = readline.question('Digigite a unidade de medida da velocidade (m/s ou km/h): ')
  const distancia = readline.questionFloat('Digite a distancia: ')
  const tempo = readline.questionInt('Digite o tempo: ')
  const velocidade = calculaVelocidade(distancia, tempo)
  switch (unidadeDeMedida) {
    case 'm/s':
      console.log(`Valor da velocidade em m/s: ${velocidade.toFixed(2)}`)
      console.log(`Convertendo para km/h: ${(velocidade*3.6).toFixed(2)}`)
      break;
    case 'km/h':
      console.log(`Valor da velocidade em km/h: ${velocidade.toFixed(2)}`)
      console.log(`Convertendo para m/s: ${(velocidade/3.6).toFixed(2)}`)
      break;
    default:
      console.log('Unidade de medida inválida! Digite novamente')
  }

}

main();