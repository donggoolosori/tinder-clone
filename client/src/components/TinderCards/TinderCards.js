import React from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

const TinderCards = ({ people }) => {
  return (
    <div className="cards__container">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.imgUrl}
          preventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${person.imgUrl})` }}
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
