import React from 'react';
import FavoriteDog from '../components/FavoriteDog';


const Home = () => {
  return (
    <div className="row mt-3">
      <div className="col-md-6 offset-md-3  col-lg-6 offset-lg-3 col-xs-12">
        <FavoriteDog />

      </div>
    </div>
  );
}

export default Home;
