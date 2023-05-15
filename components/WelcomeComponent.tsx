import React from 'react';
import { withExpoSnack } from 'nativewind';

import { StyledText as Text } from './StyledNativeComponents';

const WelcomeComponent = () => {
	return (
		<>
			<Text className="text-white">Welcome to Prism Chat mobile client!</Text>
		</>
	);
};

export default withExpoSnack(WelcomeComponent);
