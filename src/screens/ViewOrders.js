import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealContext from '../context/Context';

const ViewOrdersScreen = props => {
  const { state, removeOrder } = useContext(MealContext);
  const orders = state.orders;
  const[orderId,setOrder]= useState({orders: {},quantity:1 });

  //remove orders

  const removeMeal=() => {
    orderId.orders=orders;
    removeOrder(orderId);
  }


  return (
    <View>
      
      <View style={styles.header}>
        <Text style={styles.title}>your orders</Text>
      </View>
    
    

      <View style={styles.infoCard}>
        <Text>{orders.title}</Text>
      </View>
        
        <Button title='Remove!' 
        onPress={() =>{
          removeMeal(orderId);
        }} />
      
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: 'rgb(24, 44, 200)',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: '#eee',
    fontSize: 20,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(125, 87, 200)',
    margin: 10,
    padding: 20,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoCard: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#999',
    borderRadius: 5,
  },
});

export default ViewOrdersScreen;
