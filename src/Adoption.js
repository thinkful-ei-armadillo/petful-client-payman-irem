import React, { Component } from "react";
import PetListContext from "./PetListContext";

export default class Adoption extends Component {
  static contextType = PetListContext;

  render() {
    const cat = this.props.cats;
    const dog = this.props.dogs;
    return (
    <div>
        <div className="cat container">
            <h2>{cat.name}</h2>
            <div className="cat-box">
                <img src={cat.image} className="cat image" alt="a close shot of the cat" />
                <p>{cat.name}</p>
            </div>
            <div className="button-box">
                <button type="button" onClick={this.handleClickAdoptButton}>Adopt Me!</button>
            </div>      
        </div>
        <div className="dog container">
            <h2>{dog.name}</h2>
            <div className="dog-box">
                <img src={dog.image} className="cat-owner logo" alt="a close shot of the dog" />
            </div>
            <div className="button-box">
                <button type="button" onClick={this.handleClickAdoptButton}>Adopt Me!</button>
            </div>      
        </div> 
    </div>
    )  
  }
}
