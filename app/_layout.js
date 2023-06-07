import {SplashScreen, Stack} from 'expo-router';

import {useFonts, Nunito_700Bold} from '@expo-google-fonts/nunito';

const StackLayout = () => {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      {/* <Stack.Screen name="(tabs)" /> */}
    </Stack>
  );
};
export default StackLayout;
