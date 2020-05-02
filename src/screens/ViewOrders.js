import React, {useState, useContext } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import MealContext from '../context/Context';

const ViewOrdersScreen = props => {
  const { state, getOrder,removeOrder } = useContext(MealContext);
  const orders = state.orders;
  console.log("view",orders);
  //.find(
    //(orders) => orders.id === props.route.params.order);
  const [ordered,setOrder]= useState({ orders: {}, quantity: 1 });
  const orderedMeal =()=> {
    ordered.orders=orders;
    getOrder(ordered);

    }
   // console.log("view",orders);
  return (
    <View>
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
  titleContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingVertical: 5,
		paddingHorizontal: 12,
  },
  infoCard: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#999',
    borderRadius: 5,
  },
  title: {
    color: '#eee',
    fontSize: 20,
  },
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ViewOrdersScreen;
