import React, { Component } from "react";
import PetListContext from "./PetListContext";
import PetApiService from './pet-service';

export default class Adoption extends Component {
  static contextType = PetListContext;
  
  componentDidMount() {
    this.context.clearError()
    PetApiService.getCat()
      .then(this.context.setCatList)
      .catch(this.context.setError)
    PetApiService.getDog()
      .then(this.context.setDogList)
      .catch(this.context.setError)

  }
  render() {
    const { catList, dogList } = this.context
    return (
    <div>
        {/* <div className="cat container"> */}
            {/* <h2>{catList.name}</h2>
            <div className="cat-box">
                <img src={catList.image} className="cat image" alt="a close shot of the cat" />
                <p>{catList.description}</p>
            </div>
            <div className="button-box">
                <button type="button" onClick={this.handleClickAdoptButton}>Adopt Me!</button>
            </div>      
        </div>
        <div className="dog container">
            <h2>{dogList.name}</h2>
            <div className="dog-box">
                <img src={dogList.image} className="cat-owner logo" alt="a close shot of the dog" />
                <p>{dogList.description}</p>
            </div>
            <div className="button-box">
                <button type="button" onClick={this.handleClickAdoptButton}>Adopt Me!</button>
            </div>      
        </div>  */}
    </div>
    )  
  }
}
