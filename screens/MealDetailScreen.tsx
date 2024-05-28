import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { IMeal } from '../models/meal';
import MealItemDetail from '../components/MealItemDetail';

interface IMealDetailScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
}

const MealDetailScreen: React.FC<IMealDetailScreenProps> = ({ navigation, route }) => {
  const mealItem = route.params as IMeal;
  return <MealItemDetail mealItem={mealItem}></MealItemDetail>;
};

export default MealDetailScreen;
