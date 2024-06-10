import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { IMeal } from '../models/meal';
import MealItemDetail from '../components/MealItemDetail';
import { Button, StyleSheet } from 'react-native';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { FavoriteContext } from '../store/context/favorites-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { addFavorite, removeFavorite } from '../store/redux/favorites-slice';

interface IMealDetailScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
}

const MealDetailScreen: React.FC<IMealDetailScreenProps> = ({ navigation, route }) => {
  const mealItem = route.params as IMeal;

  // canceled the use of context because of using redux
  // const favoriteMealsCtx = useContext(FavoriteContext);
  // const isMealFavorite = favoriteMealsCtx.idsOfFavorites.includes(mealItem.id);

  const dispatch = useDispatch();

  const favoriteMealIds = useSelector((state: RootState) => state.favoriteMeals.Ids);
  const isMealFavorite = favoriteMealIds.includes(mealItem.id);

  const changeFavoriteStatusHandler = () => {
    if (isMealFavorite) {
      // favoriteMealsCtx.removeFavorite(mealItem.id);
      dispatch(removeFavorite(mealItem.id));
    } else {
      // favoriteMealsCtx.addFavorite(mealItem.id);
      dispatch(addFavorite(mealItem.id));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            iconName={isMealFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return <MealItemDetail mealItem={mealItem}></MealItemDetail>;
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
