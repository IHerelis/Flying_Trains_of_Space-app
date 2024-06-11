import { createSlice } from "@reduxjs/toolkit"
import {oneGalaxyFoto} from '../thunks/galaxyFotosThunks';


const initialState = {
  dataList: [],
  dataPresent: [],
  loading: false,
  error: null,
}

const galaxyFotosSlice = createSlice ({
  name: 'galaxyFotos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(oneGalaxyFoto.fulfilled, (state, action) => {
        state.dataPresent = action.payload;
      })
  }
});


export default galaxyFotosSlice.reducer;