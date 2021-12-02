// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

//2 e 3 - Crie uma função que receba um array de inteiros e retorne o índice do maior e do menor valor.

let inteiros = [2,4,8,1,3,10];
let numeroMaior = 0;
let numeroMenor = 0;
function retornaMaiorMenor (inteiros){
    for (let index = 0; index < inteiros.length; index +=1) {
        if (inteiros[0] < inteiros[index]){
            numeroMaior = inteiros[index]
        } else {
            numeroMenor = inteiros[index]
        }
    }
return "O maior número é: " + numeroMaior + ". O menor número é: " + numeroMenor;
}
console.log (retornaMaiorMenor(inteiros));
