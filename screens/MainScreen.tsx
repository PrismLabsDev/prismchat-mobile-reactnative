import React, { useEffect } from 'react';
import { withExpoSnack } from 'nativewind';

// Components
import { StyledView as View } from '../components/StyledNativeComponents';
import WelcomeComponent from '../components/WelcomeComponent';

const MainScreen = () => {
	return (
		<>
			<View className="flex-1 items-center justify-center bg-background">
				<WelcomeComponent />
			</View>
		</>
	);
};

export default withExpoSnack(MainScreen);
