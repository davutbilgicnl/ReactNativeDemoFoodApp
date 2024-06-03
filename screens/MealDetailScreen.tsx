import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { IMeal } from '../models/meal';
import MealItemDetail from '../components/MealItemDetail';
import { StyleSheet } from 'react-native';

interface IMealDetailScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
}

const MealDetailScreen: React.FC<IMealDetailScreenProps> = ({ navigation, route }) => {
  const mealItem = route.params as IMeal;
  return <MealItemDetail mealItem={mealItem}></MealItemDetail>;
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
