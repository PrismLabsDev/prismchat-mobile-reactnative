import React from 'react';
import { withExpoSnack } from 'nativewind';

import {
	StyledView as View,
	StyledText as Text,
} from './StyledNativeComponents';

const _Component = () => {
	return (
		<>
			<View>
				<Text>Component Template!</Text>
			</View>
		</>
	);
};

export default withExpoSnack(_Component);
