import React, { Component } from "react";

class OptionSelect extends Component {
  render() {
    const { id, name } = this.props.coin;
    return <option value={id}>{name}</option>;
  }
}

export default OptionSelect;
