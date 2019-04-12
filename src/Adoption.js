import React, { useState, useEffect } from 'react';
//import PetListContext from './PetListContext';
import PetApiService from './pet-service';

export default function Adoption(props) {
  // const petListContext = React.useContext(PetListContext);
  const [error, setError] = useState(null);
  const [catList, setCatList] = useState(null);
  const [dogList, setDogList] = useState(null);
  const [nextCat, setNextCat] = useState(undefined);
  const [nextDog, setNextDog] = useState(undefined);

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
          .then(res => {
            setNextDog(res);
          })
          .catch(setError);
      })
      .catch(setError);
  }, []);

  function adoptCat() {
    debugger;
    PetApiService.adoptCat().then(res => {
      PetApiService.getNextCat()
        .then(res => {
          debugger;
          setNextCat(res);
        })
        .catch(setError);
    });
  }

  return (
    <div className="pet-box">
      <div>
        {nextCat !== undefined && nextCat !== null && (
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
              <button onClick={adoptCat} type="button">
                Adopt Me!
              </button>
            </div>
          </div>
        )}
        {nextCat === null && <p>All Cats Adopted</p>}
        {nextCat === undefined && <p>Loading</p>}
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
