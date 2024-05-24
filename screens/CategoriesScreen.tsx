import { FlatList, ListRenderItem } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { ICategory } from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface ICategoriesScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const CategoriesScreen: React.FC<ICategoriesScreenProps> = ({ navigation }) => {
  const renderCategoryItem: ListRenderItem<ICategory> = ({ item }) => {
    const pressHandler = () => {
      //second argument is optional and should be object
      navigation.navigate('MealsOverview', item);
    };

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
