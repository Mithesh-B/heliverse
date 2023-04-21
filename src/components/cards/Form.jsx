import React, { useState } from 'react';
import './form.scss';
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";


function Form({onCloseForm, title, poster, imdbID}) {
    //form state handeling
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [date, setDate] = useState('');
    //calling dispach
  const dispach =useDispatch()

    //dispach form data to redux store
  const handleSubmit = (event) => {
    event.preventDefault();
    onCloseForm();
    dispach(addToCart({ name, email, mobileNumber, date, rating , title, poster, imdbID }));
  };
  //handle form events
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  //implement movie rating into form
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input type="tel" id="mobileNumber" value={mobileNumber} onChange={handleMobileNumberChange} required />
      </div>
      <div>
        <label htmlFor="date">Moving Watching Date:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} required />
      </div>
   
      <div className="star-rating">Rating: <span> </span>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      </div>
        <button  className='submit' type="submit">Save</button>
    </form>
            );
}

export default Form;
