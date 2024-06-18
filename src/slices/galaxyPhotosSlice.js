import { createSlice } from "@reduxjs/toolkit"
import {oneGalaxyPhoto, rangeGalaxyPhotos} from '../thunks/galaxyPhotosThunks';


const initialState = {
  dataList: JSON.parse(localStorage.getItem("galaxyPhotosList")) || [],
  dataPresent: JSON.parse(localStorage.getItem("galaxyPhotoPresent")) || [],
  loading: false,
  error: null,
}

const galaxyPhotosSlice = createSlice ({
  name: 'galaxyFotos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(oneGalaxyPhoto.fulfilled, (state, action) => {
        state.dataPresent = action.payload;
        localStorage.setItem("galaxyPhotoPresent", JSON.stringify(state.dataPresent))
      })
      .addCase(rangeGalaxyPhotos.fulfilled, (state, action) => {
        state.dataList = action.payload;
        localStorage.setItem("galaxyPhotosList", JSON.stringify(state.dataList));
      })

  },
  reducers: {
    removeGalaxyDataList: (state, action) => {
      state.dataList = [];
      localStorage.setItem("galaxyPhotosList", JSON.stringify(state.dataList));
    }
  }
});


export const {removeGalaxyDataList} = galaxyPhotosSlice.actions;
export default galaxyPhotosSlice.reducer;