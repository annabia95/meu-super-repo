const fs = require('fs').promises;

const read = async() => {
  const result = await fs.readFile('./simpsons.json', 'utf-8');
  const  array = JSON.parse(result);
  const strings = array.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

function main() {
  read();
}

main();