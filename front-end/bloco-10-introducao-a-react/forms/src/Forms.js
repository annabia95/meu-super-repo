import React, { Component } from 'react'
import EstadoFavorito from './EstadoFavorito';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer:false,
    };
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  handleChange({ target }) {
      const { name } = target
      const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
        [name] : value
      /* estado favorito recebe o valor dentro do textarea (roda o onChange) */
    })
}

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>
          <input
            type="number"
            name="idade"
            value={this.state.idade} 
            onChange={this.handleChange}/>
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.vaiComparecer} onChange={this.handleChange}/>
            <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
            </label>
        </form>
      </div>
    );
  }
}

export default Form;