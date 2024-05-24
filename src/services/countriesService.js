// src/services/countriesService.js
import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export const getCountryInfo = (country) => {
  return axios.get(`${BASE_URL}/name/${country}`);
};
