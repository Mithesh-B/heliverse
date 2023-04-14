import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../components/cards/cartSlice'


export const store = configureStore({
  reducer: {
    cart: cartSlice
  },
})