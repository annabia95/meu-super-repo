import React, { Component } from 'react'

class EstadoFavorito extends Component {
    render() {
      const {value, handleChange } = this.props
      
      let error = undefined
      if (value.length > 120) error = "Texto muito grande!"
     
      return (
     <label>
      Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea 
        name="estadoFavorito" 
        value={value} 
        onChange={handleChange} 
        />
        <span>{error ? error : ''}</span>
        {/* Quando o meu textarea é prenchido, dispara o evento determinado em handleChange. Atualiza o valor de estadofavorito com event.target.value. Posteriomente, o meu value do textarea recebe esse valor  */}
    </label>
    )}
}



export default EstadoFavorito