import { extendTheme } from 'native-base';

export const theme = extendTheme({
	colors: {
		primary: {
			700: '#32363b',
		},
		secondary: {
			700: '#D1FF2B',
			400: '#E4FF85',
			100: '#F7FAEB',
		},
		green: {
			700: '#00875F',
			500: '#00B37E',
			300: '#04D361',
		},
		gray: {
			700: '#121214',
			600: '#202024',
			500: '#29292E',
			400: '#323238',
			300: '#7C7C8A',
			200: '#C4C4CC',
			100: '#E1E1E6',
		},
		white: '#FFFFFF',
	},
	fonts: {
		heading: 'Poppins_700Bold',
		body: 'Poppins_400Regular',
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 20,
	},
	sizes: {
		14: 56,
	},
	config: {
		// Changing initialColorMode to 'dark'
		initialColorMode: 'dark',
	},
});
