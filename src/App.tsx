import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from './screens/Home';
import Details from './screens/Details';
// import ToDoList from './screens/ToDoList';

export type RootStackPramList = {
  Home: undefined;
  Details: {product: Product};
  ToDoList: undefined;
};

const Stack = createNativeStackNavigator<RootStackPramList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Trending Products',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Product details',
          }}
        />
        {/* <Stack.Screen name="ToDoList" component={ToDoList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
