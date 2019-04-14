import React, { Component } from "react";

class Result extends Component {
  showResult = () => {
    const { name, quote } = this.props.quote;
    if (!name) return null;
    return (
      <div className="bg-success py-4">
        <div className="resumen text-light text-center">
          <h2 className="mb-4">Resumen</h2>
        </div>
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.showResult()}</React.Fragment>;
  }
}

export default Result;
