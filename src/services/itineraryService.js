// src/services/itineraryService.js
import axios from "axios";

export const getItineraries = () => {
  return axios.get("/api/itineraries");
};

export const addItinerary = (activity) => {
  return axios.post("/api/itineraries", { activity });
};
