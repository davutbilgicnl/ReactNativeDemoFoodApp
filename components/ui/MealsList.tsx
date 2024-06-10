import { FlatList, View, StyleSheet, ListRenderItem } from 'react-native';
import { IMeal } from '../../models/meal';
import MealItem from '../MealItem';

interface IMealListProps {
  meals: IMeal[];
}

const keyExtractor = (item: IMeal) => item.id;
const renderMealItem: ListRenderItem<IMeal> = ({ item }) => <MealItem mealItem={item}></MealItem>;

const MealsList: React.FC<IMealListProps> = ({ meals }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={keyExtractor}
        renderItem={renderMealItem}
        style={{ backgroundColor: '#3f2f25' }}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#3f2f25',
  },
});
