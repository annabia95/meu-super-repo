function techList(nomeTech, name) {
    // Preciso ordenar minha array de tecnologias
    nomeTech.sort();
    // Criar uma nova array para colocar o objeto
    let novaArray = [];
    // Caso nomeTech seja vazio, retornar vazio!
    if (nomeTech.length === 0) {
      return 'Vazio!';
    }
    // Fazer uma iteração para percorrer todas as posições da array nomeTech, depois armazenar na novaArray
    for (let index = 0; index < nomeTech.length; index += 1) {
      let list = {
        tech: nomeTech[index],
        name: name,
      };
      novaArray.push(list);
    }
    return novaArray;
  }
  module.exports = techList;
  