import { Text, View } from 'react-native';
import { IMeal } from '../models/meal';

interface MealItemProps {
  mealItem: IMeal;
}

const MealItem: React.FC<MealItemProps> = ({ mealItem }) => {
  const { title } = mealItem;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;
