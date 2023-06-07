import {View, Text} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Check Screen',
        }}
      />
      <Stack.Screen
        name="results"
        options={{
          headerShown: false,
          headerTitle: 'Results Screen',
        }}
      />
    </Stack>
  );
};

export default StackLayout;
