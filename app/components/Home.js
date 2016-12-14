import React from 'react';
import TestComponent from './TestComponent';

class Home extends React.Component {
  render() {
    return (
      <div className='alert alert-info'>
        Hello from Home Component
        <TestComponent />
      </div>
    );
  }
}

export default Home;