import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  Button,
  RefreshControl,
} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from '../../types/navigation/navigation';
import axios from 'axios';
import useAuthStore from '../../stores/LoginStore.ts';

type HomeScreenProps = StackScreenProps<MainStackParamList, 'home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation, route}) => {
  const [refreshing, setRefreshing] = useState(false);
  const {cookie} = useAuthStore();
  const getListData = async () => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:8000/getData',
        {}, // body가 필요하지 않으면 빈 객체
        {
          headers: {
            cookies: cookie, // 쿠키 JSON 문자열 전송 (FastAPI에서는 Header('cookies')로 받음)
          },
        },
      );
      console.log('Data response:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getListData();
    setRefreshing(false);
  };

  useEffect(() => {
    console.log('Home screen mounted');
    // getListData();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Text>Home Screen</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

export default HomeScreen;
