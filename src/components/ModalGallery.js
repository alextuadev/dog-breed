import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBreedList,
  selectBreedList,
  selectSubBreedDetails,
  getSubBreedDetails,
  selectFavoriteDog,
  setFavoriteDog
} from '../reducers/breeds';
import '../styles.css'

const ModalGallery = ({ subBreedSelected, modalClass, setModalClass }) => {
  const dispatch = useDispatch();

  const breedList = useSelector(selectBreedList);
  const subBreedDetail = useSelector(selectSubBreedDetails);
  const favoriteDog = useSelector(selectFavoriteDog);

  const [subBreedList, setSubBreedList] = useState([]);
  const [breedSelected, setBreedSelected] = useState('');

  const [isFavorite, setisFavorite] = useState(false);


  const [mClass, setmClass] = useState('');

  const setFavorite = (favorite) => {
    if (favoriteDog) {
      if (window.confirm("You have a favorite Dog. Do you want change it?")) {
        dispatch(setFavoriteDog(favorite));
        setisFavorite(true);
      }
    } else {
      setisFavorite(true);
      dispatch(setFavoriteDog(favorite));
    }
  }


  useEffect(() => {
    console.log("favoriteDog", favoriteDog)
    setisFavorite(false)
    if (favoriteDog === subBreedSelected) {
      setisFavorite(true)
    }
  }, [subBreedSelected]);

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
                  <h5 className="red">Is Your favorite</h5> :
                  <button
                    className="btn btn-primary btn-small"
                    onClick={() => setFavorite(subBreedSelected)} >Mark as favorite</button>
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
