import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from './src/context/Context';

export default function App() {
	return (
		<Provider>
			<NavigationContainer>
				<SafeAreaView style={{ flex: 1 }}>
					<AppNavigator />
				</SafeAreaView>
			</NavigationContainer>
		</Provider>
	);
}
