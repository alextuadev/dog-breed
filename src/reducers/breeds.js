import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBreeds, fetchBreedDetail, fetchSubBreedDetail } from '../api';

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

export const getSubBreedDetails = createAsyncThunk(
  'subbreeds/getDetail',
  async (info) => {
    const response = await fetchSubBreedDetail(info['breedName'], info['subbreed']);
    const data = await response.json();
    return data.message;
  }
);


export const breedSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    filterByName: (state, action) => {
      console.log(action.payload)
      const allowed = [action.payload.toLowerCase()];
      const filtered = Object.keys(state.breedList)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = state.breedList[key];
          return obj;
        }, {});

      state.breedList = filtered;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBreedList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBreedList.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.breedList = action.payload;
      })
      .addCase(getSubBreedDetails.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.subBreedDetail = action.payload;
      });
  },
});

export const { filterByName } = breedSlice.actions;

export const selectBreedList = (state) => state.breed.breedList;
export const selectSubBreedDetails = (state) => state.breed.subBreedDetail;




export default breedSlice.reducer;
