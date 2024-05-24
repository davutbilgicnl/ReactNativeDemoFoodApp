import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { NavigationProp, RouteProp, ParamListBase } from '@react-navigation/native';
import { ICategory } from '../models/category';

interface IMealsOverviewScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
}

const MealsOverviewScreen: React.FC<IMealsOverviewScreenProps> = ({ navigation, route }) => {
  const categoryId = (route.params as ICategory).id;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
