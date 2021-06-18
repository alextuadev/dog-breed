import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBreedList,
  selectBreedList,
  selectSubBreedDetails,
  getSubBreedDetails
} from '../reducers/breeds';
import '../styles.css'
import ModalGallery from './ModalGallery';

const BreedList = () => {
  const breedList = useSelector(selectBreedList);
  const subBreedDetail = useSelector(selectSubBreedDetails);

  const [subBreedList, setSubBreedList] = useState([]);
  const [breedSelected, setBreedSelected] = useState('');
  const [subBreedSelected, setSubBreedSelected] = useState('');
  const [modalClass, setModalClass] = useState('modal fade');

  const setSubBreed = (key) => {
    setBreedSelected(key)
    setSubBreedList(breedList[key]);
  }

  const dispatch = useDispatch();

  const showDetails = (subbreed) => {
    setModalClass('modal fade d-block show')

    setSubBreedSelected(subbreed)
    let data = [];
    data['breedName'] = breedSelected
    data['subbreed'] = subbreed

    dispatch(getSubBreedDetails(data))
  }

  return (
    <>
      <h3 className="mt-3">All Breeds</h3>
      <div className="col-6">
        <ul className="list-group">
          {
            Object.keys(breedList).map((key, index) =>
              <li
                className="pointer list-group-item"
                key={index}
                onClick={() => setSubBreed(key)}>{key}</li>
            )
          }
        </ul>
      </div>

      <div className="col-6">
        <div className="sticky-top">
          {subBreedList.length > 0
            ?
            <>
              <h4>Sub-breeds</h4>
              <ul className="list-group">
                {
                  subBreedList.map((el, index) =>
                    <li className="pointer list-group-item"
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
      </div>

      <ModalGallery
        modalClass={modalClass}
        setModalClass={setModalClass.bind()}
        breedSelected={breedSelected}
        subBreedSelected={subBreedSelected}

      />

    </>
  );
}

export default BreedList;
