import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface CategoriesScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('MealsOverview');
  };

  const renderCategoryItem: ListRenderItem<Category> = ({ item }) => {
    return (
      <CategoryGridTile id={item.id} title={item.title} color={item.color} onPress={pressHandler} />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
};

export default CategoriesScreen;
