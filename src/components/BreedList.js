import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBreedList,
  selectBreedList
} from '../reducers/breeds';

const BreedList = () => {
  const breedList = useSelector(selectBreedList);

  useEffect(() => {
    console.log(breedList)
  });

  return (
    <>
      <h3 className="mt-3">All Breeds</h3>
      <ul>
        {
          Object.keys(breedList).map((key, index) =>
            <li className="pointer"
              key={index}
              onClick={() => showDetails()}>{key}</li>
          )
        }
      </ul>
    </>
  );
}

export default BreedList;
