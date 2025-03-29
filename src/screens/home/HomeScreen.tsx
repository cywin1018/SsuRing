// HomeScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';

type HomeScreenProps = StackScreenProps<MainStackParamList, 'home'>;
export type MainStackParamList = {
  home: undefined;
  login: undefined;
};
const HomeScreen: React.FC<HomeScreenProps> = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default HomeScreen;
