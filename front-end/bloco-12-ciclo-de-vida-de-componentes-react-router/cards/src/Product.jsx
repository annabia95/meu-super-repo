import React, { Component } from "react";

class Product extends Component {
  constructor () {
      super(); 
      this.state = {
        card: null,
        isLoading:true,
      }
      this.fetchCards = this.fetchCards.bind(this);
  }
  /* dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições). Acontece logo após o render! */
  componentDidMount() {
    this.fetchCards();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { card } = nextState;
    console.log(card.suit)
    if (this.state.card) {
      return this.state.card.suit !== card.suit;
    }
    return true;
  }

  /* dispara uma ou mais ações após o componente ser atualizado; */

  componentDidUpdate(_prevProps, prevState) {
  }

  /* Criando a função fetch */
  async fetchCards () {
    const url = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1';
    const response = await fetch(url);
    const { cards } = await response.json();
    const [ card ] = cards;
    this.setState({
      card, isLoading: false
    })

  }
  render() {
    const { card, isLoading } = this.state;
        
    return (
    <div>
        <h2>Card</h2>
        { isLoading ? <div>Loading...</div>
        : <div>
          <h2>{ `${card.value} OF ${card.suit}` }</h2>
           <img src={ card.image } alt={ `${card.value} OF ${card.suit}` } /> 
        </div>
      }
      <button type="button" onClick={this.fetchCards}>Próxima Carta</button>
    </div> 
    
    );
  }
}

export default Product;