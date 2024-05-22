import { Pressable, View, Text } from 'react-native';
import Category from '../models/category';

const CategoryGridTile: React.FC<Category> = ({ id, title, color }) => {
  return (
    <View>
      <Pressable key={id}>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
