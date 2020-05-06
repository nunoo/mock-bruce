import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { Context } from '../context/Context';

const OrderScreen = (props) => {
	const { state, getMeals } = useContext(Context);

	useEffect(() => {
		getMeals();

		const listener = props.navigation.addListener('focus', () => {
			getMeals();
		});

		return listener;
	}, []);

	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.title}>Welcome to Bruce's Diner!</Text>
			</View>
			<FlatList
				data={state.meals}
				renderItem={(itemData) => {
					return (
						<View style={styles.cardContainer}>
							<TouchableOpacity
								style={styles.card}
								onPress={() => {
									props.navigation.navigate('Single Meal', {
										mealId: itemData.item.id,
									});
								}}
							>
								<Text style={styles.title}>{itemData.item.title}</Text>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
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
	card: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(125, 87, 200)',
		margin: 10,
		padding: 20,
		marginVertical: 10,
	},
	title: {
		color: '#eee',
		fontSize: 20,
	},
});

export default OrderScreen;
