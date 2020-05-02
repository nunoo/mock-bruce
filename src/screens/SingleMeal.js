import React, { useState, useContext } from 'react';
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Button,
	ImageBackground,
	Picker,
	TextInput,
	TouchableWithoutFeedback,
} from 'react-native';
import MealContext from '../context/Context';
import { FontAwesome } from 'react-native-vector-icons';
import { Icon } from 'react-native-elements';

// const state = {
// 	quantity: '',
// };

const SingleMealScreen = (props) => {
	const { state, addToOrder,getOrders,setFavorite } = useContext(MealContext);
	const meal = state.meals.find(
		(meal) => meal.id === props.route.params.mealId
	);
	const [order, setOrder] = useState({ meal: {}, quantity: 1 });

	const orderMeal = () => {
		order.meal = meal;
		addToOrder(order);
		
	};
	const favMeal=()=> {
		order.meal= meal;
		setFavorite(order);

	};

	// console.log(order);

	return (
		<View style={styles.mealItem}>
			<TouchableWithoutFeedback>
				<View>
					{/* Top Card Section */}
					{/* Meal Information and Description */}
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: meal.imageUrl }}
							style={styles.imgBG}
						>
							<View style={styles.titleContainer}>
								<Text style={styles.title}>{meal.title}</Text>
							</View>
						</ImageBackground>
					</View>

					{/* Bottom Card Section */}
					<View style={[styles.mealRow, styles.mealDetail]}>
						<Text style={{ ...styles.title, ...{ color: 'black' } }}>
							${meal.price}
						</Text>
						<Text>({meal.affordability})</Text>

						<View style={styles.actionButtons}>
							{/* I need a quantity input :/ */}

							<Button
								title="Order Now!"
								onPress={() => {
									orderMeal(order);
									//orderedId:order.id;
									console.log(order);
								}}
							/>
						</View>
						<View style={[styles.mealRow, styles.mealDetail]}></View>
						<Icon
                              raised
                              name='heart-o'
                               type='font-awesome'
                               color='#f50'
						      onPress={() => { 
								               orderMeal(order);
											   console.log('hello');
											   } }/>

						


  

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
		height: 500,
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
