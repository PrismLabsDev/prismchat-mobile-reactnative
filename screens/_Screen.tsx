import React from 'react';
import { withExpoSnack } from 'nativewind';

import {
	StyledView as View,
	StyledText as Text,
} from '../components/StyledNativeComponents';

const _Screen = () => {
	return (
		<>
			<View>
				<Text>Screen Template!</Text>
			</View>
		</>
	);
};

export default withExpoSnack(_Screen);
