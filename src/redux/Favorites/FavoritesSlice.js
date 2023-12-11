import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addToFavorite(state, action) {
      return (state = [...state, action.payload]);
    },
    removeFromFavorite(state, action) {
      return (state = state.filter(car => car !== action.payload));
    },
  },
});
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;