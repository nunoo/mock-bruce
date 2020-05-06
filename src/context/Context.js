import createDataContext from './indexContext';
import Meal from '../models/meal';
// import { MEALS } from '../data/dummy-data';

// Set my state
const initialState = {
	meals: [],
	orders: [],
};

// Add Reducer if using reducer
const mealReducer = (state, action) => {
	switch (action.type) {
		case 'get_meals':
			return { ...state, meals: action.meals };

		case 'add_to_order':
			return { ...state, orders: state.orders.concat(action.order) };

		case 'remove_order':
			return {
				...state,
				orders: state.orders.filter((order) => order.id !== action.orderId),
			};

		case 'get_orders':
			return state;

		// create set_favorite case that returns the updated state

		default:
			return state;
	}
};

const getMeals = (dispatch) => {
	return async () => {
		// ping the firebase api with a get request
		const response = await fetch('https://rn-mock-bruce.firebaseio.com/meals.json');
		// Check for error
		if (!response.ok) {
			return console.log('There is an error!');
		}
		// Create an empty array where I will store new meal objects
		const resData = await response.json();
		const loadedMeals = [];

		// Loop through the data received from firebase creating meal object
		// pushing each new meal object into empty array
		for (const key in resData) {
			loadedMeals.push(
				new Meal(
					key,
					resData[key].title,
					resData[key].affordability,
					resData[key].imageUrl,
					resData[key].price,
					resData[key].favorite
				)
			);
		}
		// dispatch my type and meals object to reducer
		dispatch({ type: 'get_meals', meals: loadedMeals });
	};
};

const addToOrder = (dispatch) => {
	return (order) => {
		let createOrderId = Math.random().toString(36).substring(2, 15);
		order.id = createOrderId;
		dispatch({ type: 'add_to_order', order });
		console.log(order)
	};
};

const getOrders = (dispatch) => {
	return () => {
		dispatch({ type: 'get_orders' });
	};
};

const removeOrder = (dispatch) => {
	return (orderId) => {
		dispatch({ type: 'remove_order', orderId });
	};
};

export const { Context, Provider } = createDataContext(
	mealReducer,
	{ getMeals, addToOrder, getOrders, removeOrder },
	initialState
);
