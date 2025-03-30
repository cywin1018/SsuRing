import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen.tsx';
import LoginScreen from '../screens/login/LoginScreen.tsx';
import {RootStackPageList} from '../types/navigation/navigation.ts';

const StackNavigation = () => {
  const Stack = createStackNavigator<RootStackPageList>();

  const customStackNavigationOptions: StackNavigationOptions = {
    gestureEnabled: false,
    title: '',
    headerStyle: {
      backgroundColor: '#209bec',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'login'}
        screenOptions={customStackNavigationOptions}>
        {/* 메인 페이지 */}
        <Stack.Screen name="home">
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="login">
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
