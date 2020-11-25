import React, { useState } from "react";
// style
import "./App.css";
// components
import Header from "./components/Header/Header";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import TinderCards from "./components/TinderCards/TinderCards";

const App = () => {
  const [people, setPeople] = useState([
    {
      name: "아이유",
      imgUrl: "https://pbs.twimg.com/media/D0AEcLJVYAErhXl.jpg",
    },
    {
      name: "박서준",
      imgUrl:
        "https://www.ilyosisa.co.kr/news/photo/201912/213017_104844_5159.jpg",
    },
  ]);

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
