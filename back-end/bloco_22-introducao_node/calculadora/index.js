const operations = require('./operaçoes.js');
const readLine = require('readline-sync');

console.log("Calculadora da Anna")

const num1 = readLine.questionInt("Digite um número: ");
const oper = readLine.question("Digite a operação: ");
const num2 = readLine.questionInt("Digite um número: ");

switch(oper) {
  case "+":
    operations.sum(num1,num2)
    break;
  case "-":
    operations.sub(num1,num2)
    break;
  case "*":
    operations.mul(num1,num2)
    break;
  case "/":
    operations.div(num1,num2)
    break;
  default:
    console.log('Operação desconhecida!Digite novamente.')
}
