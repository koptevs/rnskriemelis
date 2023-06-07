import {View, Text} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Home Screen',
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: 'Settings Screen',
        }}
      />
    </Stack>
  );
};

export default StackLayout;
