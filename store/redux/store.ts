import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './favorites-slice';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

//to improve type safety and get better autocompletion
export type RootState = ReturnType<typeof store.getState>;
