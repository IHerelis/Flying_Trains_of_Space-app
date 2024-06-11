import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let url = new URL(`https://api.nasa.gov/planetary/apod`);
const key = `PMrvKQaRh8Zmq3pCnNBlO6aLkeGvX7rDrUueJbJ5`;
// const start = e.target.elements['startDate'].value.trim();
// const end = e.target.elements['endDate'].value.trim();
url.searchParams.set(`api_key`, key);
url.searchParams.set(`start_date`, '2024-06-10');
url.searchParams.set(`end_date`, '2024-06-10');


export const oneGalaxyFoto = createAsyncThunk('galaxy.foto', async () => {
  const response = await axios.get(`${url}`);
  // console.log(url);
  // console.log(response.data);
  return response.data;
});