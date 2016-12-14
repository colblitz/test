import React from 'react';
import { testFunction } from '../util/Test';

class TestComponent extends React.Component {
  handleClick() {
    console.log('this is:', this);
    testFunction();
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me sdfg
      </button>
    );
  }
}

export default TestComponent;