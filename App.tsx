import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

//https://reactnavigation.org/
//npm install @react-navigation/native
//npm install react-native-screens react-native-safe-area-context
import { NavigationContainer } from '@react-navigation/native';

//https://reactnavigation.org/docs/stack-navigator/
//npm install @react-navigation/stack
import { createStackNavigator } from '@react-navigation/stack';

import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MelasCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
