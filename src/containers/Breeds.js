import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBreedList,
  selectBreedList,
  filterByName
} from '../reducers/breeds';

import BreedList from '../components/BreedList';

const Breeds = () => {
  const [subBreed, setSubBreed] = useState(false)
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const restoreList = () => {
    dispatch(getBreedList())
    setText('');
  }

  useEffect(() => {
    console.log("Call the use effect")
    dispatch(getBreedList())
  }, [])

  return (
    <>
      <div className="row mt-3">
        <div className="col-12">
          <div className="d-flex">
            <input type="text"
              className="form-control"
              placeholder="Search by breed name"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-primary"
              type="button"
              onClick={() => dispatch(filterByName(text))}
            >Filter</button>

            <button className="btn btn-danger"
              type="button"
              onClick={() => restoreList()}
            >Clear</button>
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
