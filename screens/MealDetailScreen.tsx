import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { IMeal } from '../models/meal';
import MealItemDetail from '../components/MealItemDetail';
import { Button, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';

interface IMealDetailScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
}

const MealDetailScreen: React.FC<IMealDetailScreenProps> = ({ navigation, route }) => {
  const mealItem = route.params as IMeal;

  const headerRightButtonHandler = () => {
    console.log('Tabbed!');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton iconName="star" color="#fff" onPress={headerRightButtonHandler} />;
      },
    });
  }, [navigation, headerRightButtonHandler]);

  return <MealItemDetail mealItem={mealItem}></MealItemDetail>;
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
