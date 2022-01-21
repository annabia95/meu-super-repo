const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((currentName) => currentName === name);
  //Adicione seu código aqui
};

console.log(hasName(names, 'Ana'))