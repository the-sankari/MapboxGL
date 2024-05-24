/* eslint-disable no-unused-vars */
// src/pages/TripPlanner.jsx
import React, { useState } from "react";

const TripPlanner = () => {
  const [itinerary, setItinerary] = useState([]);

  const addActivity = (activity) => {
    setItinerary([...itinerary, activity]);
  };

  return (
    <div>
      <h1>Plan Your Trip</h1>
      <input
        type="text"
        placeholder="Add an activity"
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value) {
            addActivity(e.target.value);
            e.target.value = "";
          }
        }}
      />
      <ul>
        {itinerary.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default TripPlanner;
