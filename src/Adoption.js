import React, { Component } from "react";
import { Link } from "react-router-dom";
import PetListContext from "./PetListContext";

export default class Adoption extends Component {
  static contextType = PetListContext;

  render() {
    const cat = this.props.cats;
    const dog = this.props.dogs;
    return (
    <div>
    <div className="cat container">
        <h2>{cat.title}</h2>
        <div className="cat-box">
            <img src={cat.image} className="cat-owner logo" alt="headshot of the cat planner" />
            <p>{cat.name}</p>
        </div>
        <div className="button-box">
            <button type="button" onClick={this.handleClickAdoptButton}> Me!</button>
        </div>      
    </div>
    <div className="dog container">
    <h2>{cat.title}</h2>
    <div className="cat-box">
        <img src={cat.image} className="cat-owner logo" alt="headshot of the cat planner" />
        <p>{cat.name}</p>
    </div>
    <div className="button-box">
        <button type="button" onClick={this.handleClickAdoptButton}> Me!</button>
    </div>      
    </div> 
    </div>
    )  
  }
}
