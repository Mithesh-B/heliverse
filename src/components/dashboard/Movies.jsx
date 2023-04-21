import React from 'react'
import './movies.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../cards/cartSlice'

const Movies = () => {
  //get data from redux global state and populate the cart
    const products = useSelector(state=>state.cart.products)
    const dispach =useDispatch()


  return (
    <div className='my_movies'>
      <div className="teamContent">
        My movies
        {products.map((item)=>(
            <div key={item.imdbID} className='content'>
                <div className="left">
                    <div className='name'>{item.title}</div>
                    <div className='date'>{item.date}</div>
                    <div className='email'>{item.name}</div>
                    <button className='remove' onClick={()=>dispach(removeItem(item.imdbID))}>remove</button>
                </div>
                <div className="right">
      
                    <img src={item.poster} alt="" />
                    
                </div>
            </div>
        ))}
       
      </div>
    </div>
  )
}

export default Movies
