console.log("Olá!");

interface Iart<T> {
  title: string;
  createdAt: number;
  especifications: T; //sabemos os valores, mas não sabemos as chaves que iremos receber
}

type Painting = {
  height: number;
  length: number;
};

type Sculture = {
  height: number;
  weigth: number;
};

type Music = {
  duration: number;
};
// Usando union
const arte: Iart<Painting | Sculture | Music>[] = [
  {
    title: "La gio",
    createdAt: 1503,
    especifications: { height: 77, length: 53 },
  },
  {
    title: "David",
    createdAt: 1501,
    especifications: { height: 5, weigth: 5000 },
  },
  {
    title: "Sinfonia 9",
    createdAt: 1824,
    especifications: { duration: 153 },
  },
];

console.log(arte);

enum Color {
  Black = "Pretos",
  Red = "Vermelha",
  Silver = "Prata",
}

enum Directions {
  Direita = "Direita",
  Esquerda = "Esquerda",
}

enum Doors {
  DRIVER = "da pessoa motorista",
  RIDE = "da pessoa carona",
  BEHIND_DRIVER = "de trás da pessoa motorista",
  BEHIND_RIDE = "de trás da pessoa carona",
}

class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  turnOn(): void {
    console.log("Carro ligado.");
  }

  turnOff(): void {
    console.log("Carro desligado.");
  }

  stop(): void {
    console.log("Parando o carro.");
  }

  speedUp(): void {
    console.log("Acelerando o carro.");
  }

  speedDown(): void {
    console.log("Reduzindo a velocidade do carro.");
  }
  honk(): void {
    console.log("Buzina acionada: BIP BIP");
  }

  openTheDoor(door: Doors): void {
    console.log(`Abre a porta ${door}`);
  }
  closeTheDoor(door: Doors): void {
    console.log(`Feche a porta ${door}`);
  }

  turn(direction: Directions): void {
    console.log(`Virando para a ${direction}.`);
  }
}

const gol = new Car('volkswagen', Color.Silver, 4)
gol.openTheDoor(Doors.DRIVER);
gol.closeTheDoor(Doors.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.Esquerda);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.Direita);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.Direita);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.Direita);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.Esquerda);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.Esquerda);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);
gol.speedUp();

console.log(gol)

type Slices  = 4 | 6 | 8

type tPizzas = "Comum" | "Veg" | "Doce"

type cPizzas = "Calabresa" | "Frango" | "Peperoni"

type vPizzas = "Marguerita" | "Palmito" | "Cogumelo"

type dPizzas = "Nutela" | "Goiabada" | "Mashmallow"

interface Ipizza{
  flavor: string;
  slices: Slices;
}

interface InewPizza extends Ipizza {
  tipos: tPizzas;
}

const pizza1:Ipizza[] = [
  {
    flavor: "Calabresa",
    slices: 8,
  },
  {
    flavor: "Marguerita",
    slices: 6,
  },
  {
    flavor: "Nutela",
    slices: 4,
  },
]

const pizza2: InewPizza[] = [
  {
    tipos: "Comum",
    flavor: "Calabresa",
    slices: 8,
  },

]

console.log(pizza1);
