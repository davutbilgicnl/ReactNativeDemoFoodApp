import { Text, View, Image, StyleSheet } from 'react-native';
import { IMeal } from '../models/meal';
import MealDetails from './MealDetails';

interface IMealItemDetailProps {
  mealItem: IMeal;
}

const MealItemDetail: React.FC<IMealItemDetailProps> = ({ mealItem }) => {
  const {} = mealItem;

  return (
    <View style={styles.container}>
      <Image source={{ uri: mealItem.imageUrl }} style={styles.image} />
      <MealDetails mealItem={mealItem} />
      {mealItem.ingredients.map((ingredient, index) => (
        <Text key={'ingredient_' + index}>{ingredient}</Text>
      ))}
      {mealItem.steps.map((step, index) => (
        <Text key={'step_' + index}>- {step}</Text>
      ))}
    </View>
  );
};

export default MealItemDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f2f25',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailItem: {},
});
