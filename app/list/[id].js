import {View, Text} from 'react-native';
import React from 'react';
import {Stack, useSearchParams} from 'expo-router';
import HeaderRight from '../../components/HeaderRight';
import LogoTitle from '../../components/LogoTitle';
import {themePalette} from '../../theme';

const DetailsPage = () => {
  const {id} = useSearchParams();
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          title: `Details #${id}`,
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
      <Text>My details for: {id}</Text>
    </View>
  );
};

export default DetailsPage;
