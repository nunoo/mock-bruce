import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MealContext from '../context/Context';
import { TextInput } from 'react-native-gesture-handler';

const SingleMealScreen = (props) => {
	const { state, addToOrder } = useContext(MealContext);
	const meal = state.meals.find(
		(meal) => meal.id === props.route.params.mealId
	);
	const [quantity, setQuantity] = useState('1');
	const order = {};

	const orderMeal = () => {
		order.meal = meal;
		order.quantity = quantity;
		addToOrder(order);
	};

	return (
		<View style={styles.container}>
			{/* Meal Information and Description */}
			<View style={styles.infoCard}>
				<Text>{meal.title}</Text>
				<Text>${meal.price}</Text>
				<Text>{meal.affordability}</Text>
			</View>

			{/* Order Now button and input for quantity */}
			<View style={styles.actionButtons}>
				{/* I need a quantity input :/ */}
				<TextInput
					value={quantity}
					keyboardType={'numeric'}
					style={styles.numInput}
					onChangeText={(quan) => {
						setQuantity(quan);
					}}
				/>
				<Button title="Order Now!" onPress={orderMeal} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	},
	actionButtons: {
		flexDirection: 'row',
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
	numInput: {
		borderColor: 'black',
		borderWidth: 1,
		height: 40,
		width: 40,
		borderRadius: 5,
		margin: 5,
	},
});

export default SingleMealScreen;
