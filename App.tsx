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
import { ICategory } from './models/category';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen
            name="MelasCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'Meal Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
