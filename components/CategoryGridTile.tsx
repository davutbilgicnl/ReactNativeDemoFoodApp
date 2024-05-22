import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
import Category from '../models/category';

const CategoryGridTile: React.FC<Category> = ({ id, title, color }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#cccc' }}
        style={({ pressed }) => [{ flex: 1 }, pressed && styles.iosClickEffect]}
        key={id}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,

    //ios shadow
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  iosClickEffect: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
