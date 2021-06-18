import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBreedList,
  selectBreedList,
  selectSubBreedDetails,
  getSubBreedDetails,
  selectFavoriteDog,
  selectFavoriteBreedDog
} from '../reducers/breeds';

const FavoriteDog = () => {

  const dispatch = useDispatch();

  const favoriteDog = useSelector(selectFavoriteDog);
  const favoriteBreedDog = useSelector(selectFavoriteBreedDog);

  const subBreedDetail = useSelector(selectSubBreedDetails);


  useEffect(() => {
    if (favoriteDog) {
      let data = {
        breedName: favoriteBreedDog,
        subbreed: favoriteDog
      }
      dispatch(getSubBreedDetails(data))
    }
  }, [favoriteDog]);

  return (
    <>
      {favoriteDog ?
        <>
          <h2 className="mt-5 mb-3">Your favorite dog breed</h2>
          <div className="card">
            <img src={subBreedDetail[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{favoriteDog}</h5>
              <p className="card-text"><span className="font-weight-bold">Breed</span> - {favoriteBreedDog}</p>
              <p className="card-text"><span className="font-weight-bold">Sub- Breed</span> - {favoriteDog}</p>

            </div>
          </div>
        </>
        :
        <h2 className="mt-5 mb-3">You don't have a favorite dog</h2>
      }
    </>

  );
}

export default FavoriteDog;

