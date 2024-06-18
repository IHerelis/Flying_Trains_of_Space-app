import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let url = new URL(`https://api.nasa.gov/planetary/apod`);
// const key = `PMrvKQaRh8Zmq3pCnNBlO6aLkeGvX7rDrUueJbJ5`;
const key = `fkKdxXBVOsrGjvKBNNSrMeCil50syxrQZjqtkANC`;    // my key
url.searchParams.set(`api_key`, key);



export const oneGalaxyPhoto = createAsyncThunk('galaxyPhoto.one', async () => {
  // url.searchParams.set(`start_date`, '2024-06-10');
  // url.searchParams.set(`end_date`, '2024-06-10');

  url.searchParams.set(`start_date`, new Date().toLocaleDateString().split('.').reverse().join("-"));
  url.searchParams.set(`end_date`, new Date().toLocaleDateString().split('.').reverse().join("-"));
  const response = await axios.get(`${url}`);
  // console.log(url);
  // console.log(response.data);
  return response.data;
});

export const rangeGalaxyPhotos = createAsyncThunk('galaxyPhoto.range', async (payload) => {
  url.searchParams.set(`start_date`, payload.startDate);
  url.searchParams.set(`end_date`, payload.endDate);
  const response = await axios.get(`${url}`);
  console.log(url);
  console.log(response.data);
  return response.data;
});