import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen.tsx';
import SettingScreen from '../screens/setting/SettingScreen.tsx';
import {MainTabParamList} from '../types/navigation/navigation.ts';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator<MainTabParamList>();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
