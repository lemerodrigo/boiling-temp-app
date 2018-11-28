import React, { Component } from 'react';

class boilingVerdict extends Component {
  render() {
    if (this.props.celsius >= 100) {
        return <p>The water would boil.</p>;
    } else {
        return <p>The water would not boil.</p>;
    }
  }
}

export default boilingVerdict;