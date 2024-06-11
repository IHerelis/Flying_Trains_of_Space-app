import { configureStore } from "@reduxjs/toolkit";
import GalaxyFotosReducer from '../slices/galaxyFotosSlice';


export const store = configureStore({
  reducer: {
    galaxyFotos: GalaxyFotosReducer,
  }
});