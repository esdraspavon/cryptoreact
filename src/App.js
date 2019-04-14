import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import axios from "axios";

class App extends Component {
  state = {
    coins: []
  };

  async componentDidMount() {
    this.getCoins();
  }

  getCoins = async () => {
    const url = `https://api.coinmarketcap.com/v2/ticker/`;
    await axios
      .get(url)
      .then(resp => {
        this.setState({ coins: resp.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <Header title="Cotizador de cryptomonedas al instante" />
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <Form coins={this.state.coins} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
