/* Dada uma matriz, transforme em um array. */
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
  
function flatten() {
  const myArray = arrays.reduce((acc,curr) => [`${acc} ${curr}`]);
return myArray;
}
console.log(flatten(arrays));

/* Outra solução: */

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(flatten(arrays));

/* Para os exercícios 2, 3 e 4 considere o seguinte array: */
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

/* 2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
 */
function reduceNames() {
  return books.reduce((acc,curr, index, array) => { 
    if (index === array.length - 1) return acc.concat(curr.author.name, '.');
    return acc.concat(curr.author.name, ', ');
  }, '');
}
console.log (reduceNames(books));

/* 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados. */


function averageAge() {
  const calculateAge = books.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0);
  return calculateAge/books.length;
}
console.log(averageAge(books));

/* 4 - Encontre o livro com o maior nome. */

function longestNamedBook() {
  return books.reduce((acc, curr) => {
    if (curr.name.length > acc.name.length) {
      return curr;
    }
    return acc;
  });
}

console.log(longestNamedBook(books));

/* 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. */

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr, index, letter) => {
    if(names[index][letter] === 'a' || [index][letter] === 'A'){
      acc += 1;
    }
  }, 0);
}

console.log(containsA(names));

/* 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected . */

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((student,index) =>({ 
    name:`${student}`, 
    avarage: (grades[index].reduce((acc,curr) => acc + curr, 0) /grades[index].length),
}));
}
console.log(studentAverage(students,grades));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];