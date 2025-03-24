import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native';
import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View className="mb-6 px-6">
      <Text
        className={`mb-2 text-xl font-bold ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
        {title}
      </Text>
      <Text
        className={`text-base ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const safePadding = 'p-[5%]';

  return (
    <View className={`${bgColor} flex-1`}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#0f172a' : '#f3f4f6'} // Tailwind 컬러값 수동 적용
      />
      <ScrollView className={`${bgColor}`}>
        <View className={`pr-[5%]`}>
          <Header />
        </View>
        <View
          className={`${
            isDarkMode ? 'bg-black' : 'bg-white'
          } ${safePadding} pb-[5%]`}>
          <Section title="Step One">
            Edit <Text className="font-bold text-blue-500">App.tsx</Text> to
            change this screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
