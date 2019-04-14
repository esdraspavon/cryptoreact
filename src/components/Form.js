import React, { Component } from "react";

import OptionSelect from "./OptionSelect";

class Form extends Component {
  coinRef = React.createRef();
  criptoRef = React.createRef();

  quoteCoins = e => {
    e.preventDefault();

    //Crear el objeto

    const quote = {
      coin: this.coinRef.current.value,
      cripto: this.criptoRef.current.value
    };

    //Enviar por props
    this.props.getCriptoValue(quote);

    //Resetear formulario
  };

  render() {
    return (
      <form onSubmit={this.quoteCoins}>
        <div className="form-group">
          <label>Moneda:</label>
          <select className="form-control" ref={this.coinRef}>
            <option value="" disabled defaultValue>
              Elige tu moneda
            </option>
            <option value="USD">Dolar Estadounidense</option>
            <option value="MXN">Pesos Mexicanos</option>
            <option value="GBP">Libras Esterlinas</option>
            <option value="EUR">Euros</option>
          </select>
        </div>
        <div className="form-group">
          <label>Criptomoneda</label>
          <select className="form-control" ref={this.criptoRef}>
            {Object.keys(this.props.coins).map(key => (
              <OptionSelect key={key} coin={this.props.coins[key]} />
            ))}
          </select>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Cotizar" />
        </div>
      </form>
    );
  }
}

export default Form;
