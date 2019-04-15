import React, { Component } from 'react';

const PetListContext = React.createContext({
  catList: [],
  dogList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPetList: () => {},
  removePet: () => {}
});
export default PetListContext;

export class PetListProvider extends Component {
  state = {
    petList: [],
    error: null
  };

  setCatList = catList => {
    this.setState({ catList });
  };

  setDogList = dogList => {
    this.setState({ dogList });
  };

  clearcatList = () => {
    this.setState({ catList: [] });
  };

  cleardogList = () => {
    this.setState({ dogtList: [] });
  };

  removeCat = cat => {
    let newCatList = this.state.catList.filter(item => item.id !== cat.id);
    this.setState({ petList: newCatList });
  };

  removeDog = dog => {
    let newDogList = this.state.dogList.filter(item => item.id !== dog.id);
    this.setState({ petList: newDogList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      petList: this.state.petList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPetList: this.setPetList,
      removePet: this.removePet
    };
    return (
      <PetListContext.Provider value={value}>
        {this.props.children}
      </PetListContext.Provider>
    );
  }
}
