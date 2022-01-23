// Faça uma lista com as suas frutas favoritas
const specialFruit = ['laranja', 'maça', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'iogurte', 'aveia'];

const fruitSalad = (fruit, additional) => {
    return [...fruit, ...additional]; 
};

console.log(fruitSalad(specialFruit, additionalItens));

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
  
  const userInfos = {
    ...user,
    ...jobInfos,
  };
  
  const { name, age, nationality, profession, squad, squadInitials } = userInfos;
  
  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);