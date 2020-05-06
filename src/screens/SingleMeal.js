import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Context } from '../context/Context';
// import { FontAwesome } from 'react-native-vector-icons';
import { Icon } from 'react-native-elements';

const SingleMealScreen = (props) => {
	const { state, addToOrder } = useContext(Context);
	const meal = state.meals.find((meal) => meal.id === props.route.params.mealId);
	const [quantity, setQuantity] = useState('1');
	const [favorite, setFavorite] = useState('false');
	const order = {};

	const orderMeal = () => {
		order.meal = meal;
		order.quantity = quantity;

		addToOrder(order);
	};

	const setFav = () => {
		order.favorite = favorite;
	}

	return (
		<View style={styles.mealItem}>
			<TouchableWithoutFeedback>
				<View>
					{/* Top Card Section */}
					{/* Meal Information and Description */}
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground source={{ uri: meal.imageUrl }} style={styles.imgBG}>
							<View style={styles.titleContainer}>
								<Text style={styles.title}>
									{meal.title} ${meal.price} ({meal.affordability})
								</Text>
							</View>
						</ImageBackground>
					</View>

					{/* Bottom Card Section */}
					<View style={[styles.mealRow, styles.mealDetail]}>
						<TextInput
							value={quantity}
							keyboardType={'numeric'}
							style={styles.numInput}
							onChangeText={(quan) => {
								setQuantity(quan);
							}}
						/>
						<View style={styles.actionButtons}>
							{/* I need a quantity input :/ */}
							<Button title='Order Now!' onPress={orderMeal} />
						</View>
						<View style={[styles.mealRow, styles.mealDetail]}></View>
						<Icon
							raised
							name='heart-o'
							type='font-awesome'
							color='#f50'
							onPress={(fav) => {
								setFavorite(fav);
							
							}}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	actionButtons: {
		height: 40,
		backgroundColor: 'white',
		borderRadius: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	numInput: {
		height: 40,
		width: 40,
		borderRadius: 5,
		margin: 5,
		backgroundColor: 'white',
	},
	textInputStyle: {
		height: 20,
		width: 40,
		marginRight: 20,
		borderColor: 'gray',
		borderWidth: 1,
		backgroundColor: 'white',
	},
	mealItem: {
		height: 400,
		width: '100%',
		backgroundColor: '#ddd',
		marginBottom: 15,
		borderRadius: 10,
		overflow: 'hidden',
	},
	imgBG: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
	mealRow: {
		flexDirection: 'row',
	},
	mealHeader: {
		height: '85%',
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%',
	},
	titleContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingVertical: 5,
		paddingHorizontal: 12,
	},
	title: {
		fontSize: 22,
		color: 'white',
		textAlign: 'center',
	},
	button: {
		height: 20,
		width: 40,
		borderRadius: 10,
		backgroundColor: 'white',
	},
	buttonText: {
		margin: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default SingleMealScreen;
