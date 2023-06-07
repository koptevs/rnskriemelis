import {View, Text} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Results Screen',
        }}
      />
      <Stack.Screen
        name="inner"
        options={{
          headerTitle: 'Inner Screen',
        }}
      />
    </Stack>
  );
};

export default StackLayout;
