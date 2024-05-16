import { Pressable, View, Text } from 'react-native';

interface CategoryGridTileProps {
  title: string;
  color: string;
}

const CategoryGridTile: React.FC<CategoryGridTileProps> = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
