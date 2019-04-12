import React, { useState, useEffect } from 'react';
//import PetListContext from './PetListContext';
import PetApiService from './pet-service';

export default function Adoption(props) {
  // const petListContext = React.useContext(PetListContext);
  const [error, setError] = useState(null);
  const [catList, setCatList] = useState(null);
  const [dogList, setDogList] = useState(null);
  const [nextCat, setNextCat] = useState(null);
  const [nextDog, setNextDog] = useState(null);

  useEffect(() => {
    PetApiService.getCat()
      .then(res => {
        setCatList(res);
        PetApiService.getNextCat()
          .then(res => {
              setNextCat(res);
          })
          .catch(setError);
      })
      .catch(setError);
      PetApiService.getDog()
      .then(res => {
        setDogList(res);
        PetApiService.getNextDog()
          .then(res =>{
              setNextDog()
          })
          .catch(setError);
      })
      .catch(setError);
   
  }, []);

  return (
    <div className='pet-box'>
    <div>
      {nextCat !== null && (
        <div className="cat container">
          <h2>{nextCat.name}</h2>
          <div className="cat-box">
            <img
              src={nextCat.imageurl}
              className="pet image"
              alt="a close shot of the cat"
            />
            <p>{nextCat.story}</p>
          </div>
          <div className="button-box">
            <button type="button">Adopt Me!</button>
          </div>
        </div>
      )}
    </div>
    <div>
    {nextDog !== null && (
      <div className="dog container">
        <h2>{nextDog.name}</h2>
        <div className="dog-box">
          <img
            src={nextDog.imageurl}
            className="cat image"
            alt="a close shot of the cat"
          />
          <p>{nextDog.story}</p>
        </div>
        <div className="button-box">
          <button type="button">Adopt Me!</button>
        </div>
      </div>
    )}
  </div>
  </div>
  );
}
