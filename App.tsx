import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Routes from './src/routes';
import themes from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const userDeviceTheme = useColorScheme();
  const theme = themes[userDeviceTheme];
  return (
    <>
      {fontsLoaded && (
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      )}
    </>
  );
}
