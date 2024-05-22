import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';

interface CategoriesScreenProps {
  //   children: React.ReactNode;
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = () => {
  const renderCategoryItem: ListRenderItem<Category> = ({ item }) => {
    return <CategoryGridTile id={item.id} title={item.title} color={item.color} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    ></FlatList>
  );
};

export default CategoriesScreen;
