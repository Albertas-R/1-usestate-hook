// 1. create component
// 2. create state variable and initialize to 0
// 3. create method that is capable of setting state value

import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
