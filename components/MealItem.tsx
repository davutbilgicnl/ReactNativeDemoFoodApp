import { Image, Pressable, Text, View, StyleSheet, Platform } from 'react-native';
import { IMeal } from '../models/meal';
import Card from './ui/Card';

interface MealItemProps {
  mealItem: IMeal;
}

const MealItem: React.FC<MealItemProps> = ({ mealItem }) => {
  const { id, title, imageUrl, affordability, complexity, duration } = mealItem;
  return (
    <Card>
      <Pressable
        android_ripple={{ color: '#cccc' }}
        style={({ pressed }) => [{ flex: 1 }, pressed && styles.iosClickEffect]}
        key={id}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration.toString().toUpperCase()}</Text>
            <Text style={styles.detailItem}>{complexity.toString().toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toString().toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </Card>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    // overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
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
  iosClickEffect: {
    opacity: 0.5,
  },
});
