import React from 'react';
import './App.css';
import data from './data';
//Import do json criado com os pokemons e seus dados.
import Pokedex from './Components/Pokedex';

class App extends React.Component {
render() {
  return (
    <div className="App">
      <h1 className='title'> Pokedex </h1>
      <Pokedex pokemons={data} />
{/*       // No arquivo App.js, estamos renderizando o componente da Pokedex.
      // Criamos a prop "pokemons", e nela chamamos o nosso json "pokemons",
      // pokemons={} é a nossa prop e o valor dentro das {} é o nosso json,
      // ou seja nomeDaProps={valorDaProps}, o nome da props é o que foi passado
      // dentro do componente Pokedex.
      // O valor da props, vem o import que fizemos na linha 3 do arquivo data.js
      // pois desta forma poderemos trabalhar com esses dados via "props".
      // Uma informação importante é que podemos dar qualquer nome a uma prop,
      // mas atente-se para que seja um nome descritivo. */}
    </div>
  );
}

}

export default App;