import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Context } from '../context/Context';

const SingleMealScreen = (props) => {
	const { state, addToOrder } = useContext(Context);
	const meal = state.meals.find((meal) => meal.id === props.route.params.mealId);
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
				<Text style={styles.title}>{meal.title}</Text>
				<Text>(${meal.price})</Text>
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
				<Button title='Order Now!' onPress={orderMeal} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	},
	title: {
		fontSize: 20,
		color: '#ddd',
	},
	infoCard: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#999',
		borderRadius: 5,
	},
	actionButtons: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	numInput: {
		borderColor: '#333',
		borderWidth: 1,
		height: 40,
		width: 40,
		borderRadius: 5,
		margin: 5,
	},
});

export default SingleMealScreen;
