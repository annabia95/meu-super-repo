function sumMult(num1,num2,num3) {
  const promise = new Promise((resolve, reject) => {
    const resultado = ((num1 + num2) * num3);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) reject(new Error("Informe apenas números"));
    if(resultado < 50) {
      throw new Error("Valor muito baixo")
    } 
    resolve(resultado)
  });

  return promise;
}

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

sumMult(a,b,c)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

sumMult(1,2,3)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

sumMult("a","b",3)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));