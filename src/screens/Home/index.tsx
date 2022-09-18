import { Text, VStack } from 'native-base';

export function Home() {
	return (
		<VStack
			flex={1}
			pb={6}
			justifyContent={'center'}
			alignItems={'center'}
			_dark={{ bg: 'gray.900' }}
			_light={{ bg: 'gray.50' }}
		>
			<Text>Home</Text>
		</VStack>
	);
}
