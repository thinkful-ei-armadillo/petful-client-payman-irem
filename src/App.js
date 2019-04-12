import React, { Component } from 'react';
import './App.css';
import Adoption from './Adoption';

class App extends Component {
  state = {
    view: 'home'
  };

  changeView = () => {
    if (this.state.view === 'home') {
      this.setState({ view: 'adoption' });
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.view === 'home' && (
            <React.Fragment>
              <div>
                <h1>
                  Adopt a FIFO pet; give an equal opportunity to a pet in
                  shelter!
                </h1>
                <p>
                  Welcome to Adopt a Pet FIFO style page. We're an animal
                  shelter that allows adoption of cats and dogs only in the
                  order they join us. We only have two types of pets: cats and
                  dogs, all of which wait for you to take your home. The
                  adoption process works strictly on a "First-In, First-Out"
                  basis. The FIFO is based on the animals that came to the
                  shelter first. You can adopt a cat, or a dog, or both. The
                  only rule is that we ask you to adopt the animal that came to
                  the shelter first to give an equal opportunity to all of our
                  animals If you'd like to start the process, get in queue, just
                  like our pets, so you can adopt when its your turn.
                </p>
              </div>
              <button onClick={this.changeView}>Start</button>
            </React.Fragment>
          )}
          {this.state.view === 'adoption' && <Adoption />}
        </header>
      </div>
    );
  }
}

export default App;
