import { FlatList, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
('../data/dummy-data.ts');

interface CategoriesScreenProps {
  //   children: React.ReactNode;
}

interface ItemData {
  item: {
    title: string;
    color: string;
  };
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = () => {
  const renderCategoryItem = (itemData: ItemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
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
