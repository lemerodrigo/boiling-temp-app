import React, { Component } from 'react';
// import { GreenLabel, GreenLabelWithIcon }  from './labels/GreenLabel.js';
// import { RedLabel }  from './labels/RedLabel.js';
import Label from './labels/Label.js';

class boilingVerdict extends Component {

  render() {
    if (this.props.celsius >= 200) {
      return <Label theColor={this.props.color}> It's over 200 Celsius, it's boooiiiilingg! </Label>  
      // return <GreenLabelWithIcon>It's over 200 Celsius, it's boooiiiilingg! </GreenLabelWithIcon>
    } else if (this.props.celsius >= 100) {
      return <Label theColor={this.props.color}>The water would boil.</Label>;
      // return <GreenLabel>The water would boil.</GreenLabel>;
    } else {
      return <Label theColor={this.props.color}>The water would not boil.</Label>;
      // return <RedLabel>The water would not boil.</RedLabel>;
    }
  }
}

export default boilingVerdict;