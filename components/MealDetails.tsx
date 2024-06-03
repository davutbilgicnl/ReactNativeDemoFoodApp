import { Text, View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { IMeal } from '../models/meal';

interface IMealDetailsProps {
  mealItem: IMeal;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const MealDetails: React.FC<IMealDetailsProps> = ({ mealItem, style, textStyle }) => {
  const { duration, complexity, affordability } = mealItem;
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration.toString().toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toString().toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toString().toUpperCase()}</Text>
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
