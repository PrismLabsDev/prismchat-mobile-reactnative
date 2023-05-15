import React from 'react';
import { StatusBar } from 'expo-status-bar';

// Screens
import MainScreen from './screens/MainScreen';

const App = () => {
	return (
		<>
			<StatusBar style="auto" />
			<MainScreen />
		</>
	);
};

export default App;
