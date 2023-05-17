import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

import initialization from './initialization';

// Screens
import MainScreen from './screens/MainScreen';

SplashScreen.preventAutoHideAsync();

const App = () => {
	useEffect(() => {
		(async () => {
			await initialization();
			await SplashScreen.hideAsync();
		})();
	});

	return (
		<>
			<StatusBar style="auto" />
			<MainScreen />
		</>
	);
};

export default App;
