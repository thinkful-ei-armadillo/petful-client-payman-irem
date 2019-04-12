import React, { Component } from 'react';
import './App.css';
import Adoption from './Adoption';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Adopt a FIFO pet; give an equal opportunity to a pet in shelter!
          </p>
          <Adoption />
        </header>
      </div>
    );
  }
}

export default App;
