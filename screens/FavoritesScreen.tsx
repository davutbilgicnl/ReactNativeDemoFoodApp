import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { useContext, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FavoriteContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/ui/MealsList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';

interface IFavoritesScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
}

const FavoritesScreen: React.FC<IFavoritesScreenProps> = ({ navigation, route }) => {
  // canceled the use of context because of using redux
  // const favoriteMealsCtx = useContext(FavoriteContext);
  // const favoriteMealsIds = favoriteMealsCtx.idsOfFavorites;

  const favoriteMealsIds = useSelector((state: RootState) => state.favoriteMeals.Ids);

  const favoriteMeals = useMemo(
    () => MEALS.filter((meal) => favoriteMealsIds.includes(meal.id)),
    [favoriteMealsIds]
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals!</Text>
      </View>
    );
  }

  return <MealsList meals={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
  },
});
