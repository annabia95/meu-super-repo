type Point = {
  x: number;
  y: number;
};

type Bird = {
  wings: 2;
  beaks: 1;
  biped: true;
}

type Sum = {
  z: number;
  w: number;
}

type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}

type IdentifyingDocument = string | number;
type SO = "linux" | "mac os" | "windows";
type Vowels = "a" | "e" | "i" | "o" | "u";


function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

function sum (s:Sum) {
  console.log(`O valor da soma é: ${s.w + s.z}`)
}

function retornarCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}

printCoord({ x: 100, y: 100 });

sum({w:10 , z: 55})
