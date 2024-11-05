import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddProductScreen from './src/screens/AddProductScreen';
import EditProductScreen from './src/screens/EditProductScreen';
import EditProductPartialScreen from './src/screens/EditProductPartialScreen';
import DeleteProductScreen from './src/screens/DeleteProductScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add Product" component={AddProductScreen} />
        <Stack.Screen name="Edit Product" component={EditProductScreen} />
        <Stack.Screen name="Edit Product Partial" component={EditProductPartialScreen} />
        <Stack.Screen name="Delete Product" component={DeleteProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
