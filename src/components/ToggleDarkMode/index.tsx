import React from 'react';

import { StatusBar } from 'expo-status-bar';
import {
	Fab,
	useColorMode,
	MoonIcon,
	SunIcon,
	useColorModeValue,
} from 'native-base';

export const ToggleDarkMode = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<StatusBar
				style={colorMode === 'dark' ? 'light' : 'dark'}
				backgroundColor="transparent"
				translucent
			/>
			<Fab
				shadow={7}
				renderInPortal={false}
				variant="unstyled"
				_dark={{
					bg: 'orange.50',
					_hover: {
						bg: 'orange.100',
					},
					_pressed: {
						bg: 'orange.100',
					},
				}}
				_light={{
					bg: 'blueGray.900',
					_hover: {
						bg: 'blueGray.800',
					},
					_pressed: {
						bg: 'blueGray.800',
					},
				}}
				p={3}
				icon={useColorModeValue(
					<MoonIcon color="white" size="8" />,
					<SunIcon color="orange.400" size="8" />,
				)}
				onPress={toggleColorMode}
			/>
		</>
	);
};
