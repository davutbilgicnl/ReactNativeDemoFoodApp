import { createContext, ReactNode, useState } from 'react';

interface IFavoriteContextState {
  idsOfFavorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoriteContext = createContext<IFavoriteContextState | undefined>({
  idsOfFavorites: [],
  addFavorite: (id: string) => {
    console.warn('addFavorite was called without a FavoriteContext provider');
  },
  removeFavorite: (id: string) => {
    console.warn('removeFavorite was called without a FavoriteContext provider');
  },
});

interface FavoriteContextProviderProps {
  children: ReactNode;
}

export const FavoritesContextProvider: React.FC<FavoriteContextProviderProps> = ({ children }) => {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealsIds((prevFavoritesIds) => {
      if (!prevFavoritesIds.includes(id)) {
        return [...prevFavoritesIds, id];
      }
      return prevFavoritesIds;
    });
  };

  const removeFavorite = (id: string) => {
    setFavoriteMealsIds((prevFavoritesIds) =>
      prevFavoritesIds.filter((favoriteId) => favoriteId !== id)
    );
  };

  const value = {
    idsOfFavorites: favoriteMealsIds,
    addFavorite,
    removeFavorite,
  };

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
};

export default FavoritesContextProvider;
