import {View, Text} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';
import {StatusBar} from 'expo-status-bar';

const HomePage = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Link href="/home/settings" asChild>
        <Text style={{fontFamily: 'Nunito_700Bold', fontSize: 36}}>
          Settings
        </Text>
      </Link>
      <StatusBar style="light" />
    </View>
  );
};

export default HomePage;
