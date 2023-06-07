import {Tabs} from 'expo-router';

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{headerShown: false, headerTitle: 'Homme'}}
      />
      <Tabs.Screen name="list" options={{headerTitle: 'List'}} />
      <Tabs.Screen
        name="check"
        options={{headerShown: false, headerTitle: 'Check'}}
      />
    </Tabs>
  );
};
