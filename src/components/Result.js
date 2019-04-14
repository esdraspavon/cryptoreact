import React, { Component } from "react";

class Result extends Component {
  showResult = () => {
    const quoteCoin = this.props.quoteCoin;
    const { name, quotes } = this.props.quote;
    if (!name) return null;
    const { price, percent_change_1h, percent_change_24h } = quotes[quoteCoin];
    return (
      <div className="bg-success py-4">
        <div className="resumen text-light text-center">
          <h2 className="mb-4">Resumen</h2>
          <p>
            <span className="font-weight-bold">
              El precio de {name} en {quoteCoin} es de:
            </span>
            ${price.toFixed(2)}
          </p>
          <p>
            <span className="font-weight-bold">Porcentaje última hora:</span>
            {percent_change_1h} %
          </p>
          <p>
            <span className="font-weight-bold">
              Porcentaje últimas 24 horas:
            </span>
            {percent_change_24h} %
          </p>
        </div>
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.showResult()}</React.Fragment>;
  }
}

export default Result;
