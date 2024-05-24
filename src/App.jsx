// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TripPlanner from "./pages/TripPlanner";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
