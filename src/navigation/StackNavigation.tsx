import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import LoginScreen from '../screens/login/LoginScreen';
import {RootStackPageList} from '../types/navigation/navigation';

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
        initialRouteName="login"
        screenOptions={customStackNavigationOptions}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={BottomNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
