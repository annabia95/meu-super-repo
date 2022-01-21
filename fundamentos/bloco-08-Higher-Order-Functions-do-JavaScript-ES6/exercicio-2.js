/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */
const newEmployees = (myFunction) => {
    const employees = {
      id1: myFunction('Pedro Guerra'),
      id2: myFunction('Luiza Drumond'),
      id3: myFunction('Carla Paiva'),
    }
    return employees;
  };
const myFunction = (fullName) => {
    const formatoDoEmail = fullName.toLowerCase().split(' ').join('_');
    const eMail = `${formatoDoEmail}@trybe.com`;
    return { fullName, eMail };
}
console.log(newEmployees(myFunction));