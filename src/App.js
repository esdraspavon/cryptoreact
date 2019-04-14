import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

class App extends Component {
  state = {
    coins: [],
    quote: {},
    quoteCoin: "",
    loading: false
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

  //Cotizar una cripto en base a una moneda
  getCriptoValue = async coins => {
    const { coin, cripto } = coins;

    const url = `https://api.coinmarketcap.com/v2/ticker/${cripto}/?convert=${coin}`;
    this.setState({
      loading: true
    });
    await axios.get(url).then(resp => {
      this.setState({
        quote: resp.data.data,
        quoteCoin: coin,
        loading: false
      });
    });
  };

  render() {
    const loading = this.state.loading;

    let result;

    if (loading) {
      result = <Spinner />;
    } else {
      result = (
        <Result quote={this.state.quote} quoteCoin={this.state.quoteCoin} />
      );
    }

    return (
      <div className="container">
        <Header title="Cotizador de cryptomonedas al instante" />
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <Form
              coins={this.state.coins}
              getCriptoValue={this.getCriptoValue}
            />
            {result}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
