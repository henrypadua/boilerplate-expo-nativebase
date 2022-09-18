import React from 'react';

import {
	useFonts,
	Poppins_400Regular,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { NativeBaseProvider } from 'native-base';

import { Loading } from '@components/Loading';
import { ToggleDarkMode } from '@components/ToggleDarkMode';

import { theme } from '@styles/theme';

import { Routes } from './routes';

export default function App() {
	const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

	return (
		<NativeBaseProvider theme={theme}>
			{!fontsLoaded ? <Loading /> : <Routes />}

			<ToggleDarkMode />
		</NativeBaseProvider>
	);
}
