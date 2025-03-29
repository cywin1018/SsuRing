import React from 'react';
import axios from 'axios';
import useAuthStore from '../../stores/LoginStore.ts';
import {Alert, Button, Switch, Text, TextInput, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';

type LoginScreenProps = StackScreenProps<MainStackParamList, 'login'>;
export type MainStackParamList = {
  home: undefined;
  login: undefined;
};
const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {studentId, password, autoLogin, setCredentials, setAutoLogin} =
    useAuthStore();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:8000/login', {
        studentId: studentId,
        password: password,
      });
      console.log('Login successful:', response.data);

      Alert.alert(
        '로그인 성공',
        '크롤링 데이터: ' + JSON.stringify(response.data.programs),
        [
          {
            text: '확인',
            onPress: () => navigation.navigate('home'), // 로그인 성공 후 HomeScreen으로 이동
          },
        ],
      );
    } catch (error) {
      console.error(error);
      Alert.alert('로그인 실패', '로그인에 실패했습니다.');
    }
  };

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-11/12 max-w-[400px] p-4">
        <Text className="mb-4 text-center text-2xl font-bold">로그인</Text>
        <TextInput
          placeholder="학번을 입력하세요"
          autoCapitalize="none"
          className="mb-3 rounded border border-gray-300 p-2"
          value={studentId}
          onChangeText={text => setCredentials(text, password)}
        />
        <TextInput
          placeholder="비밀번호를 입력하세요"
          secureTextEntry={true}
          className="mb-3 rounded border border-gray-300 p-2"
          value={password}
          onChangeText={text => setCredentials(studentId, text)}
        />
        <View className="mb-3 flex-row items-center">
          <Switch
            value={autoLogin}
            onValueChange={setAutoLogin}
            thumbColor={autoLogin ? '#34D399' : '#f4f3f4'}
            trackColor={{false: '#767577', true: '#34D399'}}
          />
          <Text className="ml-2 text-base">자동 로그인</Text>
        </View>
        <View className="mt-4">
          <Button title="로그인" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
