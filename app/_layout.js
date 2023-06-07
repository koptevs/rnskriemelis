import {SplashScreen, Stack} from 'expo-router';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {useFonts, Nunito_700Bold} from '@expo-google-fonts/nunito';

// Initialize Apollo Client
const client = new ApolloClient({
  // uri: 'https://countries.trevorblades.com/graphql',
  uri: 'http://192.168.31.74/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

const StackLayout = () => {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        {/* <Stack.Screen name="(tabs)" /> */}
      </Stack>
    </ApolloProvider>
  );
};
export default StackLayout;
