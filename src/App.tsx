import React, {useEffect, useState} from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from './screens/Home';
import Details from './screens/Details';
import AddNote from './screens/AddNote';
import {RootStoreProvider} from './root-store/root-store-context';
import RootStore from './root-store/RootStore';
// import ToDoList from './screens/ToDoList';
import Notes from './screens/Notes';
import Count from './screens/Count';
export type RootStackPramList = {
  Home: undefined;
  Details: {product: Product};
  Notes: undefined;
  AddNote: undefined;
  Count: undefined;
};

const Stack = createNativeStackNavigator<RootStackPramList>();

const App = () => {
  return (
    <RootStoreProvider>
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
          <Stack.Screen name="Notes" component={Notes} />
          <Stack.Screen name="AddNote" component={AddNote} />
          <Stack.Screen name="Count" component={Count} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootStoreProvider>
  );
};

export default App;
