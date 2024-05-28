import { Text, View, Image, StyleSheet } from 'react-native';
import Card from './ui/Card';
import { IMeal } from '../models/meal';

interface IMealItemDetailProps {
  mealItem: IMeal;
}

const MealItemDetail: React.FC<IMealItemDetailProps> = ({ mealItem }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View>
          <Image source={{ uri: mealItem.imageUrl }} style={styles.image} />
          <Text>{mealItem.title}</Text>
        </View>
      </Card>
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
});
