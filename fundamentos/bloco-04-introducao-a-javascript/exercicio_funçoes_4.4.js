// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

//2 e 3 - Crie uma função que receba um array de inteiros e retorne o índice do maior e do menor valor.

let inteiros = [2,4,8,20,3,10];
let indiceMaior = 0;
function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
console.log (indiceDoMaior(inteiros));

//4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

//let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
//let nomeMaior = "a";
//function retornaMaiorMenorNome (nomes){
//    for (let index = 0; index < nomes.length; index +=1) {
//          if (nomeMaior.length < nomes[index].length) {
//            nomeMaior = nomes[index];
//        }
//    }
//return "O maior nome é: " + nomeMaior;
//}
//console.log (retornaMaiorMenorNome (nomes));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//let numbers = [2, 3, 2, 5, 8, 2, 3];
//let cont = 0;
//function retornaMaisRepete (numbers){
//    for (let index=0; index < numbers.length; index +=1) {
//        for (let index2=0; index < numbers.length; index2 +=1)
//           if (numbers[index] === numbers[index2]) {
//                cont += 1; 
//                }
//            }
//return cont;
//}
//console.log (retornaMaisRepete(numbers));