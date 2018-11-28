import React, { Component } from 'react';

class TemperatureInput extends Component {
  constructor(props) {
    super(props);

    this.scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit'
    };
  }
  
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { scale, temperature } = this.props;

    return (
      <fieldset>
        <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
        <input value={temperature} onChange={e => this.handleChange(e)} />
      </fieldset>
    );
  }
}

export default TemperatureInput;