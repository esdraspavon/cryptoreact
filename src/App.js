import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Cotizador de cryptomonedas al instante" />
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
