import React, { useEffect, useState } from "react";
import axios from "./axios";
// style
import "./App.css";
// components
import Header from "./components/Header/Header";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import TinderCards from "./components/TinderCards/TinderCards";

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/tinder/cards");
      setPeople(req.data);
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      <TinderCards people={people} />
      {/* Swipe Buttons */}
      <SwipeButtons />
    </div>
  );
};

export default App;
