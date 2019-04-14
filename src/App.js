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
              <div className ='welcome'>
                <h1>
                  Adopt a FIFO pet; give a shelter pet an equal opportunity in!
                </h1>
                <p>
                  Welcome to Adopt a Pet FIFO style page.
                  We're an animal shelter that allows adoption of cats and dogs only in the order they join us. 
                  We only have two types of pets: cats and dogs, all of which wait for you to take them to your home. 
                  The adoption process works strictly on a "First-In, First-Out" basis. 
                  You can adopt a cat, or a dog, or both. 
                  The only rule is that we ask you to adopt the animal that came to our shelter first.
                  If you'd like to start the process, get in the queue, just like our pets, so you can adopt when its your turn.
                </p>
                <img className='dogq' src='http://www.nedmartin.org/v3/amused/_img/dog-queue.jpg' alt='dogs waiting in line'/>
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
