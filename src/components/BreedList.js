import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBreedList,
  selectBreedList,
} from '../reducers/breeds';
import '../styles.css'

const BreedList = () => {
  const breedList = useSelector(selectBreedList);
  const [subBreedList, setSubBreedList] = useState([]);

  const dispatch = useDispatch();

  const showDetails = (element) => {
    console.log("element")
  }

  useEffect(() => {
    console.log(subBreedList)
  });

  return (
    <>
      <h3 className="mt-3">All Breeds</h3>
      <div className="col-6">
        <ul class="list-group">
          {
            Object.keys(breedList).map((key, index) =>
              <li
                className="pointer list-group-item"
                key={index}
                onClick={() => setSubBreedList(breedList[key])}>{key}</li>
            )
          }
        </ul>
      </div>

      <div className="col-6">
        {subBreedList.length > 0
          ?
          <>
            <h4>Sub-breeds</h4>
            <ul class="list-group">
              {
                subBreedList.map((el, index) =>
                  <li className="list-group-item"
                    key={index}
                    onClick={() => showDetails(el)}>
                    {el}
                  </li>
                )
              }
            </ul>
          </>
          :
          <h4>Don't has sub-breed</h4>
        }

      </div>
    </>
  );
}

export default BreedList;
