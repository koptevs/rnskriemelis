import {Image, View, Text, Alert} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';
import {AntDesign} from '@expo/vector-icons';
import {themePalette} from '../../../theme';
import LogoTitle from '../../../components/LogoTitle';
import HeaderRight from '../../../components/HeaderRight';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          title: 'Home Screen',
          headerStyle: {
            backgroundColor: themePalette.accentColor,
            // backgroundColor: '#3377bb',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            //   fontWeight: 'bold',
            fontSize: 24,
            fontFamily: 'Nunito_700Bold',
          },
          headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          title: 'Settings Screen',
          headerStyle: {
            backgroundColor: themePalette.accentColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: 'Nunito_700Bold',
          },
          headerRight: () => <HeaderRight />,
        }}
      />
    </Stack>
  );
};

export default StackLayout;
