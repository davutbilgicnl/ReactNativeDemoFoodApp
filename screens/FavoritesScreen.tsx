import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

interface IFavoritesScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
}

const FavoritesScreen: React.FC<IFavoritesScreenProps> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
