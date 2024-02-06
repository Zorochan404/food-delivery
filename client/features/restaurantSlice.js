import { createSlice } from '@reduxjs/toolkit'

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant:{
    id: null,
    imgUrl: null,
    title: null,
    short_description: null,
    rating: null,
    genre: null,
    dishes: null,
    long: null,
    lat: null,
    adderss: null
    },
  },
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const {  setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state) => state.restaurant.restaurant




export default restaurantSlice.reducer