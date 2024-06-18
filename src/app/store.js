import { configureStore } from "@reduxjs/toolkit";
import GalaxyPhotosReducer from '../slices/galaxyPhotosSlice';


export const store = configureStore({
  reducer: {
    galaxyPhotos: GalaxyPhotosReducer,
  }
});