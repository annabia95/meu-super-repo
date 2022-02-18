/* nome do pokemon;
tipo do pokemon;
peso médio do pokemon, acompanhado da unidade de medida usada;
imagem do pokemon. */

/* Componente que representa um pokemon */
import React from "react"
import PropTypes from 'prop-types';
 
class Pokemon extends React.Component {
    render() {
        const { pokemon: {name, type , averageWeight, image} } = this.props;
        return (
            <div className="pokemon">
            <div>
              <p>{ `Name: ${name}` }</p>
              <p>{ `Type: ${type}`}</p>
              <p>
                {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
              </p>
            </div>
            <img src={ image } alt={ `${name} sprite` } />
          </div>
        );
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };
export default Pokemon
