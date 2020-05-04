import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealContext from '../context/Context';

const ViewOrdersScreen = props => {
  const { state, removeOrder } = useContext(MealContext);
  const orders = state.orders;
  console.log('in view with orders', orders)

  return (
    <View style={styles.container}>
      <Text>Add an Order List to me!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ViewOrdersScreen;
