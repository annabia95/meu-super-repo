let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Exercicio 1
//for (let index=0; index < numbers.length; index +=1) {
//   console.log (numbers[index]);
//}

// Exercicio 2
//let soma = 0;
//for (let index=0; index < numbers.length; index +=1) {
//   soma += numbers[index]
//}
//console.log (soma);

// Exercicio 3
//let soma = 0;
//let media = 0;
//for (let index=0; index < numbers.length; index +=1) {
//    soma += numbers[index];
//}
//media = soma / numbers.length;
//console.log (media);

// Exercicio 4
//let soma = 0;
//let media = 0;
//for (let index=0; index < numbers.length; index +=1) {
//   soma += numbers[index];
//}
//media = soma / numbers.length;
//if (media > 20) {
//    console.log ("valor maior que 20");
//}
//else {
//    console.log ("valor menor ou igual a 20");
//}

// Exercicio 5
//let maior = 0;
//for (let index=0; index < numbers.length; index +=1) {
//        if (numbers[index] > maior) {
//            maior = numbers[index];
//        }
//}
//console.log (maior);

// Exercicio 6
//let impar = 0;
//for (let index=0; index < numbers.length; index +=1) {
//       if (numbers[index]%2 != 0) {
//           impar +=1;
//      }
//}
//if (impar === 0) {
//    console.log ("nenhum valor impar encontrado");
//} else {
//    console.log (impar);
//}

// Exercicio 7
//let menor= numbers[0];
//for (let index=0; index < numbers.length; index +=1) {
//        if (numbers[index] < menor) {
//           menor = numbers[index];
//     }
//}
//console.log (menor);

// Exercicio 8
//let minhaArray= [];
//for (let index=1; index <= 25; index +=1) {    
//    minhaArray.push (index);
//    }
//console.log (minhaArray);

// Exercicio 9
//let minhaArray= [];
//for (let index=1; index <= 25; index +=1) {
    
//    minhaArray.push (index/2);
//    }
//console.log (minha(Array);

// Bonus 1
//numbers.sort(function(a, b) {
//  return a - b;
//})
//console.log (numbers);

// Bonus 3
let minhaArray= [];
for (let index=0; index < numbers.length ; index +=1) {
    if (index < numbers.length-1) {
    minhaArray.push (numbers[index]*numbers[index+1]);
    } else {
      minhaArray.push (numbers[index]*2);
    }
}
console.log (minhaArray);