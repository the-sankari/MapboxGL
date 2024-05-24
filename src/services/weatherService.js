import axios from "axios";

const API_KEY = "api_key";
const BASE_URL = "http://api.openweathermap.org/data/2.5";

export const getWeather = (city) => {
  return axios.get(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
};
