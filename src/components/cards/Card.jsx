import React, { useState, useEffect } from "react";
import './card.scss'
import Dashboard from "../dashboard/Dashboard";
import { useSelector} from 'react-redux'
import Form from "./Form";




function Cards() {
  //state to show and hide form onclick
  const [showForm, setShowForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  //state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  //state for ***** rating
  const rating = useSelector(state=>state.cart.products)
  //state for handeling OMDB data
  const [cardsData, setCardsData] = useState();
  //search input state handeling
  const [searchTerm, setSearchTerm] = useState('');
  const [displayText, setDisplayText] = useState('');

  //to fetch data from json
  useEffect(() => {
    if (displayText) { // Only fetch data if searchTerm is not empty
      fetch(`https://www.omdbapi.com/?s=${displayText}&apikey=dd69d14d`)
        .then(response => response.json())
        .then(data => setCardsData(data))
        .catch(error => console.error(error));
    }
  }, [displayText]);

  //handles search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);

  };
  //handles search click
  const handleClick = () => {
    setDisplayText(searchTerm);
    setCurrentPage(1);
  };
  //handle booking button
  const handleButtonClick = (card) => {
    //shows form and sends card data as props to form child.
    setSelectedCard(card);
    setShowForm(true);
    setCurrentPage(1);
  };
  //hides form on button click
  const hideForm =()=>{
    setShowForm(false)
    setCurrentPage(1);
  }
    //pagination
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardsData?.Search?.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(cardsData?.Search.length / cardsPerPage);
    //pagination button backward and forward
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    console.log(cardsData)
  return (
    <>
      <Dashboard 
      onChange={handleSearch} click={handleClick}/>
      <div className="cards-container">

        {currentCards?.map(card => (

          <div key={card.imdbID} className="card">
            <div className="booking" ><img src={card.Poster} alt={card.Title} />

            {rating
              .filter((item) => item.imdbID === card.imdbID)
              .map((item) => (
              <div key={item.imdbID} className="content">
                <div>{[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (item.rating) ? "on" : "off"}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                  );
              })}
                </div>
              </div>
            ))}
            <button onClick={() => handleButtonClick(card)} className="booking_btn">book movie</button>
          </div>
            <h3>{card.Title}</h3>
            <p>Released: {card.Year}</p>
            <p>Type: {card.Type}</p>
          </div>
        ))}

      </div>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <Form onCloseForm={() => setShowForm(false)}   
            imdbID={selectedCard.imdbID}
            poster={selectedCard.Poster}
            title={selectedCard.Title} />
              <button className="close" onClick={hideForm}>close</button>
          </div>
        </div>
      )}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages? totalPages : 1}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Cards;

