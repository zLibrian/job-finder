import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import JobDetails from '../screens/JobDetails';

export type RootStackParamList = {
  Home: undefined;
  JobDetails: { jobId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="JobDetails" component={JobDetails} />
    </Stack.Navigator>
  );
}
