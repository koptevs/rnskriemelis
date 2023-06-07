import {Stack, Tabs} from 'expo-router';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      {/* <Stack.Screen name="(tabs)" /> */}
    </Stack>
  );
};
export default StackLayout;
