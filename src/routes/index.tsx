import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import Home from '../screens/Home';
import JobDetails from '../screens/JobDetails';

export type RootStackParamList = {
  Home: undefined;
  JobDetails: { jobId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1F1F1F',
        },
        headerTitleStyle: {
          fontFamily: 'Roboto_400Regular',
        },
        headerTintColor: '#fff',
        headerRight: () => (
          <Image source={require('../assets/userAvatar.png')} />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Hi There 👋',
        }}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={{
          headerTitle: 'Job Details',
        }}
      />
    </Stack.Navigator>
  );
}
