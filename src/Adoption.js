import React, { useState, useEffect } from 'react';
//import PetListContext from './PetListContext';
import PetApiService from './pet-service';

export default function Adoption(props) {
  // const petListContext = React.useContext(PetListContext);
  const [error, setError] = useState(null);
  const [catList, setCatList] = useState(null);
  const [dogList, setDogList] = useState(null);
  const [nextCat, setNextCat] = useState(null);

  useEffect(() => {
    debugger;
    PetApiService.getCat()
      .then(res => {
        debugger;
        setCatList(res);
        PetApiService.getNextCat()
          .then(res => {
            debugger;
            setNextCat(res);
          })
          .catch(setError);
      })
      .catch(setError);
    /*PetApiService.getDog()
      .then(this.context.setDogList)
      .catch(this.context.setError);*/
  }, []);

  return (
    <div>
      {nextCat !== null && (
        <div className="cat container">
          <h2>{nextCat.name}</h2>
          <div className="cat-box">
            <img
              src={nextCat.imageurl}
              className="cat image"
              alt="a close shot of the cat"
            />
            <p>{nextCat.imagedescription}</p>
          </div>
          <div className="button-box">
            <button type="button">Adopt Me!</button>
          </div>
        </div>
      )}
      {/*<div className="dog container">
        <h2>{dogList.name}</h2>
        <div className="dog-box">
          <img
            src={dogList.image}
            className="cat-owner logo"
            alt="a close shot of the dog"
          />
          <p>{dogList.description}</p>
        </div>
        <div className="button-box">
          <button type="button" onClick={this.handleClickAdoptButton}>
            Adopt Me!
          </button>
        </div>
  </div>*/}
    </div>
  );
}
