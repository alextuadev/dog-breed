import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBreedList,
  selectBreedList
} from '../reducers/breeds';

import BreedList from '../components/BreedList';

const Breeds = () => {
  const [subBreed, setSubBreed] = useState(false)

  // const breedList = useSelector(selectBreedList);
  // const breedList = useSelector(state => state.breed.breedList);

  // const [breedList, setBreedList] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Call the use effect")
    dispatch(getBreedList())

    // console.log(breedList)
  })



  return (
    <>
      <div className="row mt-3">
        <div className="col-12">
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="Search by breed name" />
            <button className="btn btn-primary"
              type="button"
              onClick={() => dispatch(getBreedList())}
            >Filter</button>
          </div>
        </div>
      </div>

      <div className="row mt-3">

        <BreedList
          subBreed={subBreed}
        />

      </div>
    </>
  );
}

export default Breeds;
