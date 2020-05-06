import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, ImageBackground, FlatList } from 'react-native';
import { Context } from '../context/Context';

const ViewOrdersScreen = (props) => {
	const { state, removeOrder } = useContext(Context);
	const orders = state.orders;
	console.log('in view with orders', orders);

	return (
		<View style={styles.container}>
			<FlatList
				data={orders}
				renderItem={(itemData) => {
					return (
						<View style={styles.mealItem}>
							<TouchableWithoutFeedback>
								<View>
									<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
										<ImageBackground source={{ uri: itemData.item.meal.imageUrl }} style={styles.imgBG}>
											<View style={styles.titleContainer}>
												<Text style={styles.title}>
													{itemData.item.meal.title} ({itemData.item.quantity})
												</Text>
											</View>
										</ImageBackground>
									</View>

									<View style={[styles.mealRow, styles.mealDetail]}>
										<View style={styles.actionButtons}>
											<Button
												title='Remove'
												onPress={() => {
													removeOrder(itemData.item.id);
												}}
											/>
										</View>
									</View>
								</View>
							</TouchableWithoutFeedback>
						</View>
					);
				}}
			/>
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
		height: 300,
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

export default ViewOrdersScreen;
