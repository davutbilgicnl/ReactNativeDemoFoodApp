import { StyleSheet, FlatList, View, ListRenderItem, Text } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { NavigationProp, RouteProp, ParamListBase } from '@react-navigation/native';
import { ICategory } from '../models/category';
import { IMeal } from '../models/meal';
import MealItem from '../components/MealItem';

interface IMealsOverviewScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
}

const MealsOverviewScreen: React.FC<IMealsOverviewScreenProps> = ({ navigation, route }) => {
  const categoryId = (route.params as ICategory).id;

  const displayedMeals: IMeal[] = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

  const renderMealItem: ListRenderItem<IMeal> = ({ item }) => {
    return <MealItem mealItem={item}></MealItem>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item: IMeal) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
