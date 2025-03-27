import React from 'react';
import {ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native';
import './global.css';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? 'bg-black' : 'bg-white';

  return (
    <View className={`flex-1 ${backgroundColor}`}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000' : '#fff'}
      />
      <ScrollView>
        {/* 빨간 배경의 박스 */}
        <View className="h-32 w-full items-center justify-center">
          <Text className="bg-red-500 text-xl text-white">Title</Text>
        </View>
        {/* 추가 텍스트 영역 */}
        <View className="mt-4">
          <Text className="text-base text-red-300 dark:text-white">
            This is a
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
