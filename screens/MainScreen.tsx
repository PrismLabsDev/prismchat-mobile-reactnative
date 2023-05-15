import React from 'react';
import { withExpoSnack } from 'nativewind';

import { StyledView as View } from '../components/StyledNativeComponents';

import WelcomeComponent from '../components/WelcomeComponent';

const App = () => {
	return (
		<>
			<View className="flex-1 items-center justify-center bg-background">
				<WelcomeComponent />
			</View>
		</>
	);
};

export default withExpoSnack(App);
