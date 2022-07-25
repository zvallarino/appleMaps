import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: 0,
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items,action.payload]
    },
    removeToBasket: (state, action) => {
      state.items -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeToBasket} = basketSlice.actions

export const selectBasketItems = state => state.basket.items;

export default basketSlice.reducer