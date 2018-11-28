import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { tryConvert, toCelsius, toFahrenheit } from './ConversionFunctions';

class Calculator extends Component {
  constructor(props) {
      super(props);
      this.state = {
          temperature: '',
          scale: 'c'
      }
  }

  handleCelsiusChange = (temperature) => {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature});
  }

  handleChange = (event) => {
    this.setState({
      temperature: event.target.value
    }, () => console.log('state is: ', this.state));
  }
  
  getColor = (theCelsius) => {
    let color;
    if (theCelsius < 100) {
      color = "green";
    } else if (theCelsius >= 100 && theCelsius < 200) {
      color = "orange";
    } else if (theCelsius >= 200) {
      color = "red";
    } else {
      color = "black";
    }
    return color;
  }

  render() {
    const { scale, temperature } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    const colorFromMethod = this.getColor(parseFloat(celsius));

    return (
      <div id="calculator">
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={temperature => this.handleCelsiusChange(temperature)} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={temperature => this.handleFahrenheitChange(temperature)} />

        <BoilingVerdict
          color={colorFromMethod}
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;