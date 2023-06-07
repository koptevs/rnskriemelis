import {View, Text} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';
import HeaderRight from '../../../../components/HeaderRight';
import LogoTitle from '../../../../components/LogoTitle';
import {themePalette} from '../../../../theme';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          title: 'Results Screen',
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
      <Stack.Screen
        name="inner"
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          title: 'Inner Screen',
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
