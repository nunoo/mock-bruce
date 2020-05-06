import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/Context';

const ViewOrdersScreen = (props) => {
	const { state, removeOrder } = useContext(Context);
	const orders = state.orders;
	console.log('orders', state.orders);
	// {id, quantity, meal:{}}

	return (
		<View style={styles.container}>
			<FlatList
				data={orders}
				renderItem={(itemData) => {
					return (
						<View style={styles.card}>
							<Text style={styles.title}>{itemData.item.meal.title}</Text>
							<Text>({itemData.item.quantity})</Text>
							<Button
								title='Remove'
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
	card: {
		flexDirection: 'row',
		backgroundColor: 'pink',
		width: '100%',
		padding: 15,
		borderRadius: 5,
		justifyContent: 'space-around',
		alignItems: 'center',
		marginVertical: 10,
	},
	title: {
		fontSize: 20,
		color: '#444',
	},
});

export default ViewOrdersScreen;
