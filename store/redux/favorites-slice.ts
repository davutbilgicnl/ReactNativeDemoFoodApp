import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFavoritesState {
  favoritesIds: string[];
}

const initialState: IFavoritesState = {
  favoritesIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.favoritesIds.includes(action.payload)) {
        state.favoritesIds.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favoritesIds = state.favoritesIds.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
