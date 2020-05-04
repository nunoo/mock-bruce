import React, { createContext, useState, useReducer } from 'react';
import { MEALS } from '../data/dummy-data';

// Set my state
const initialState = {
	meals: MEALS,
	orders: [],
};

// Initiate Context
const MealContext = createContext();

// Add Reducer if using reducer (funtionality to our state)
const mealReducer = (state, action) => {
	switch (action.type) {
		case 'add_to_order':
			console.log('here with my order:', action.order)
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

// Create provider component and export not as default!
export const MealProvider = ({ children }) => {
	// in component useState or useReducer for functionality
	const [state, dispatch] = useReducer(mealReducer, initialState);

	const addToOrder = (order) => {
		let createOrderId = Math.random().toString(36).substring(2, 15);
		order.id = createOrderId;
		console.log('inside with order', order)
		dispatch({ type: 'add_to_order', order });
	};

	const getOrders = () => {
		dispatch({ type: 'get_orders' });
	};

	const removeOrder = (orderId) => {
		dispatch({ type: 'remove_order', orderId });
	};

	// Add a setFavorite method that updates the favorite property in meal model from false to true
	// mealId should be passed as the parameter and passed through the provider to be accessed

	// return provider
	return (
		<MealContext.Provider value={{ state, addToOrder, getOrders, removeOrder }}>
			{children}
		</MealContext.Provider>
	);
};

export default MealContext;
