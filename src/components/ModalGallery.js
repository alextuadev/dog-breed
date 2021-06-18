import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBreedList,
  selectBreedList,
  selectSubBreedDetails,
  getSubBreedDetails
} from '../reducers/breeds';
import '../styles.css'

const ModalGallery = ({ subBreedSelected, modalClass, setModalClass, isFavorite, setisFavorite }) => {
  const breedList = useSelector(selectBreedList);
  const subBreedDetail = useSelector(selectSubBreedDetails);


  const [subBreedList, setSubBreedList] = useState([]);
  const [breedSelected, setBreedSelected] = useState('');

  // const [isFavorite, setisFavorite] = useState(false);

  /*const [subBreedSelected, setSubBreedSelected] = useState('');*/
  const [mClass, setmClass] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {

  }, []);

  return (
    <>
      <div className={modalClass} id="myModal" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Breed Gallery</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setModalClass('modal fade')}></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-between mb-3">
                <h3>{subBreedSelected}</h3>

                {isFavorite ?
                  <h5>Is Your favorite</h5> :
                  <button
                    className="btn btn-primary btn-small"
                    onClick={() => setisFavorite()} >Mark as favorite</button>
                }

              </div>

              {subBreedDetail && <>
                {
                  subBreedDetail.map((el, index) =>
                    <img key={index} className="rounded img-responsive w180" src={el} />
                  )
                }
              </>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalGallery;
