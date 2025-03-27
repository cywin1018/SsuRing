import React from 'react';
import useAuthStore from '../../stores/LoginStore.ts';
import {Button, Switch, Text, TextInput, View} from 'react-native';

const LoginScreen = () => {
  const {studentId, password, autoLogin, setCredentials, setAutoLogin} =
    useAuthStore();

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
          <Button
            title="로그인"
            onPress={() => {
              /* 로그인 처리 */
              console.log(studentId, password);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
