import React, { Component } from 'react'

const PetListContext = React.createContext({
  PetList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPetList: () => {},
  removePet:()=>{},
})
export default PetListContext

export class PetListProvider extends Component {
  state = {
    petList: [],
    error: null,
  };

  setPetList = petList => {
    this.setState({ petList })
  }

  clearPetList = () => {
    this.setState({ petList: [] })
  }

  removePet = pet => {
    let newPetList = this.state.petList.filter(item => item.id !== pet.id)
    this.setState({petList: newPetList})
  }


  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      petList: this.state.petList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPetList: this.setPetList,
      removePet: this.removePet,
    }
    return (
      <PetListContext.Provider value={value}>
        {this.props.children}
      </PetListContext.Provider>
    )
  }
}
