import { configureStore } from '@reduxjs/toolkit';
import breedReducer from '../reducers/breeds';

export const store = configureStore({
  reducer: {
    breed: breedReducer,
  },
});