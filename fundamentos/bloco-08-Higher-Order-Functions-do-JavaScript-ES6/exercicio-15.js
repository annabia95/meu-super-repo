// Faça uma lista com as suas frutas favoritas
const specialFruit = ['laranja', 'maça', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'iogurte', 'aveia'];

const fruitSalad = (fruit, additional) => {
    return [...fruit, ...additional]; 
};

console.log(fruitSalad(specialFruit, additionalItens));