const readline = require('readline-sync');

function calculaRandomNumber() {
  const num = Math.floor(Math.random() * 11);
  return num;
}

// A função main é o ponto de partida do nosso programa 
function main() {
  const numero = readline.question('Digigite um número de 0 a 10: ')
  const randomNum = calculaRandomNumber();

  if(numero === randomNum) {
    console.log("Parabéns, número correto!")
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNum}`);
  }
  
  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) ',
  );

  if (novamente !== 's') return console.log('OK, até a próxima!');

  main();
}

main();