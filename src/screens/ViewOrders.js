import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import MealContext from '../context/Context';

const ViewOrdersScreen = (props) => {
	const { state, removeOrder } = useContext(MealContext);
	const orders = state.orders;
	console.log('in view with orders', orders);

	return (
		<View style={styles.container}>
			<FlatList
				data={orders}
				renderItem={(itemData) => {
					return (
						<View style={styles.card}>
							<Text style={styles.title}>
								{itemData.item.meal.title} ({itemData.item.quantity})
							</Text>
							<Button
								title={'remove'}
								onPress={() => {
									removeOrder(itemData.item.id);
								}}
							/>
						</View>
					);
				}}
			/>
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
		color: 'white',
	},
	card: {
		flexDirection: 'row',
		backgroundColor: 'pink',
		width: '100%',
		padding: 15,
		marginVertical: 10,
		borderRadius: 5,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
});

export default ViewOrdersScreen;
