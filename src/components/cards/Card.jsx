import React, { useState, useEffect } from "react";
import data from '../../assets/heliverse_mock_data.json';
import './card.scss'

function Cards() {
  const [cardsData, setCardsData] = useState([]);


  useEffect(() => {
    setCardsData(data);
  }, []);


console.log(data)
  return (
    <div className="cards">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <h2>{card.first_name} {card.last_name}</h2>
          <p>{card.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
