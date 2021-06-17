import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBreeds } from '../api';

const initialState = {
  breedList: [],
  favoriteDog: false,
  subBreedList: []
};



export const getBreedList = createAsyncThunk(
  'breeds/fetchBreed',
  async () => {
    const response = await fetchBreeds();
    const data = await response.json();
    return data.message;
  }
);

export const breedSlice = createSlice({
  name: 'breeds',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBreedList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBreedList.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.breedList = action.payload;
      });
  },
});


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBreedList = (state) => state.breed.breedList;

export default breedSlice.reducer;
