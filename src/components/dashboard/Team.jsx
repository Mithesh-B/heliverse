import React from 'react'
import './team.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../cards/cartSlice'

const Team = () => {
  //get data from redux global state and populate the cart
    const products = useSelector(state=>state.cart.products)
    const dispach =useDispatch()


  return (
    <div className='team'>
      <div className="teamContent">
        My team
        {products.map((item)=>(
            <div key={item.id} className='content'>
                <div className="left">
                    <div className='name'>{item.firstName} {item.lastName}</div>
                    <div className='email'>{item.email}</div>
                    <div className='domain'>{item.domain}</div>
                </div>
                <div className="right">
                    <img src={item.image} alt="" />
                    <button onClick={()=>dispach(removeItem(item.id))}>remove</button>
                </div>
            </div>
        ))}
       
      </div>
    </div>
  )
}

export default Team
