import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFavoritesState {
  Ids: string[];
}

const initialState: IFavoritesState = {
  Ids: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.Ids.includes(action.payload)) {
        state.Ids.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.Ids = state.Ids.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
