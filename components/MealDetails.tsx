import { Text, View, StyleSheet } from 'react-native';
import { IMeal } from '../models/meal';

interface IMealDetailsProps {
  mealItem: IMeal;
}

const MealDetails: React.FC<IMealDetailsProps> = ({ mealItem }) => {
  const { duration, complexity, affordability } = mealItem;
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration.toString().toUpperCase()}</Text>
      <Text style={styles.detailItem}>{complexity.toString().toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toString().toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
