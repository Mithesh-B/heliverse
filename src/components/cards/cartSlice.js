import { createSlice } from '@reduxjs/toolkit'
//global state data is populated here
const initialState = {
  products: [],
  
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action)=>{
      //prevents duplicate items and adding from same domain
    const item = state.products.find(item=>item.id === action.payload.id)
    const domain = state.products.find(item=>item.domain ===action.payload.domain)
    
    if(item){
      alert('you cannot add same user twice.')
    } else if(domain){
      alert('you cannot add multiple users from same domain.')
    }
    else{
        state.products.push(action.payload)
    }
    },
    //remove item from cart
    removeItem: (state,action)=>{
        state.products= state.products.filter(item=> item.id !== action.payload)
    },
    //remove all item from cart
    resetCart: (state)=>{
        state.products=[]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart ,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer