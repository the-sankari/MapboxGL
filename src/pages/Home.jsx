// src/pages/Home.jsx
import React, { useState } from "react";
import { getWeather } from "../services/weatherService";
import { getCountryInfo } from "../services/countriesService";
import Map from "../components/Map";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [weather, setWeather] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 });

  const handleSearch = async () => {
    try {
      const weatherResponse = await getWeather(searchTerm);
      setWeather(weatherResponse.data);

      const countryResponse = await getCountryInfo(searchTerm);
      setCountryInfo(countryResponse.data[0]);

      if (weatherResponse.data.coord) {
        setCoordinates({
          longitude: weatherResponse.data.coord.lon,
          latitude: weatherResponse.data.coord.lat,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Travel Buddy</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a destination"
      />
      <button onClick={handleSearch}>Search</button>
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} °C</p>
        </div>
      )}
      {countryInfo && (
        <div>
          <h2>{countryInfo.name.common}</h2>
          <p>Capital: {countryInfo.capital[0]}</p>
          <p>Population: {countryInfo.population}</p>
        </div>
      )}
      {coordinates.longitude !== 0 && coordinates.latitude !== 0 && (
        <Map coordinates={coordinates} />
      )}
    </div>
  );
};

export default Home;
