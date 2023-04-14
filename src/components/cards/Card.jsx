import React, { useState, useEffect } from "react";
import data from '../../assets/heliverse_mock_data.json';
import './card.scss'
import Dashboard from "../dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import { useSelector } from "react-redux";


function Cards() {
  const products = useSelector(state=>state.cart.products)

  const dispach =useDispatch()

  const [cardsData, setCardsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [isAvailable, setIsAvailable]=useState('')
  const [domain, setDomain] =useState ('')
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;

  //to fetch data from json

  useEffect(() => {
    setCardsData(data);
  }, []);
  //handles search function
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };
  //handles gender filtering
  const handleGenderFilter = (event) => {
    setSelectedGender(event.target.value);
    setCurrentPage(1);
  };
  //handles availability check
  const handleAvailablity = (event) => {
    setIsAvailable(event.target.value);
    setCurrentPage(1);
  };
  //handles domain filtering
  const handleDomain = (event) => {
    setDomain(event.target.value);
    setCurrentPage(1);
  };
  //filters data based on above handle events dynaically
  const filteredCards = cardsData.filter((card) =>
  //filters name search using includes method on data
  card.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  && (selectedGender === '' || card.gender === selectedGender) && (isAvailable === '' || card.available === (isAvailable === 'true'))
  && (domain === '' || card.domain === domain)
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);



  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <>
      <Dashboard 
      onChange={handleSearch} 
      gender={handleGenderFilter} 
      available={handleAvailablity} domain={handleDomain}/>

      <div className="cards">
        {currentCards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.avatar} alt="" />
            <h2>{card.first_name} {card.last_name}</h2>
            <p>{card.gender}</p>
            <p><span>Domain: </span> {card.domain}</p>
            <p><span>Mail: </span> {card.email}</p>
            <p><span>Status: </span> {`${card.available? 'available' : 'not available'}`}</p>
            {card.available && (<button className="btn" onClick={()=>dispach(addToCart({
              id: card.id,
              firstName: card.first_name,
              lastName: card.last_name,
              image: card.avatar,
              email: card.email,
              domain: card.domain
            }
            ))}>Add to team</button>)}
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
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

