import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StyleSheet} from 'react-native';
import Home from '../screens/Home';
import MyCart from '../screens/MyCart';
import ProductInfo from '../screens/ProductInfo';
import ProductList from '../screens/ProductList';

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
      <Stack.Screen name="ProductList" component={ProductList} />

    </Stack.Navigator>
  );
}
const styles =StyleSheet.create({});