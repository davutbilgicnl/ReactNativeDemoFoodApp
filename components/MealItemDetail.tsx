import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { IMeal } from '../models/meal';
import MealDetails from './MealDetails';

interface IMealItemDetailProps {
  mealItem: IMeal;
}

const MealItemDetail: React.FC<IMealItemDetailProps> = ({ mealItem }) => {
  const { imageUrl, title, ingredients, steps } = mealItem;

  const renderIngredients = (ingredients: string[]) => {
    return (
      <View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
        </View>
        {ingredients.map((ingredient) => (
          <View key={ingredient} style={styles.listItem}>
            <Text key={ingredient} style={styles.listItemText}>
              {ingredient}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const renderSteps = (steps: string[]) => {
    return (
      <View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Steps</Text>
        </View>
        {steps.map((step) => (
          <View key={step} style={styles.listItem}>
            <Text style={styles.listItemText}>{step}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <MealDetails mealItem={mealItem} textStyle={{ color: 'white' }} />

        <View style={styles.detailsOuterContainer}>
          <View style={styles.detailsContainer}>
            {renderIngredients(ingredients)}
            {renderSteps(steps)}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealItemDetail;

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#3f2f25',
  },
  container: {
    flex: 1,
    backgroundColor: '#3f2f25',
    paddingBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailsOuterContainer: {
    alignItems: 'center',
  },
  detailsContainer: {
    width: '80%',
  },
  subtitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 6,
    marginHorizontal: 12,
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  listItemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
