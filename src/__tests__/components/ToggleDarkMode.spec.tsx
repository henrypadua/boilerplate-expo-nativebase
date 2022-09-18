import { render } from '@testing-library/react-native';

import { ProviderTesting } from '@utils/ProviderTesting';

import { ToggleDarkMode } from '@components/ToggleDarkMode';

jest.useFakeTimers();

test('renders correctly', () => {
	const screen = render(
		<ProviderTesting>
			<ToggleDarkMode />
		</ProviderTesting>,
	).toJSON();

	expect(screen).toMatchSnapshot();
});
