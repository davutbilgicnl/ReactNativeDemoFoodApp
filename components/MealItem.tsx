import { Image, Pressable, Text, View, StyleSheet, Platform } from 'react-native';
import { IMeal } from '../models/meal';
import Card from './ui/Card';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

interface MealItemProps {
  mealItem: IMeal;
}

const MealItem: React.FC<MealItemProps> = ({ mealItem }) => {
  const { id, title, imageUrl, affordability, complexity, duration } = mealItem;

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const pressHandler = () => {
    navigation.navigate('MealDetail', mealItem);
  };

  return (
    <Card>
      <Pressable
        android_ripple={{ color: '#cccc' }}
        style={({ pressed }) => [{ flex: 1 }, pressed && styles.iosClickEffect]}
        key={id}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails mealItem={mealItem} />
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

  iosClickEffect: {
    opacity: 0.5,
  },
});
