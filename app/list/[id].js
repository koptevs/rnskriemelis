import {View, Text} from 'react-native';
import React from 'react';
import {Stack, useSearchParams} from 'expo-router';

const DetailsPage = () => {
  const {id} = useSearchParams();
  return (
    <View>
      <Stack.Screen options={{headerTitle: `Details #${id}`}} />
      <Text>My details for: {id}</Text>
    </View>
  );
};

export default DetailsPage;
