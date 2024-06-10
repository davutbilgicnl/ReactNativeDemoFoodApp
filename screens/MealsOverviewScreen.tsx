import { MEALS } from '../data/dummy-data';
import { NavigationProp, RouteProp, ParamListBase } from '@react-navigation/native';
import { ICategory } from '../models/category';
import { IMeal } from '../models/meal';
import { useLayoutEffect } from 'react';
import MealsList from '../components/ui/MealsList';

interface IMealsOverviewScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
}

const MealsOverviewScreen: React.FC<IMealsOverviewScreenProps> = ({ navigation, route }) => {
  const { id: categoryId, title: categoryTitle } = route.params as ICategory;

  const displayedMeals: IMeal[] = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  // useLayoutEffect is used here to ensure that the navigation options are set
  // before the browser paints the screen. This prevents any flickering effect
  // that might occur if the title updates after the screen is painted.
  // This is especially important when the updated title is based on data that
  // might take some time to retrieve (like in an API call), although in this case
  // the data is local. useLayoutEffect runs synchronously immediately after
  // React has performed all DOM mutations, ensuring that the screen is updated
  // correctly in one pass.
  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }),
    [categoryId, categoryTitle, navigation];

  return <MealsList meals={displayedMeals} />;
};

export default MealsOverviewScreen;
