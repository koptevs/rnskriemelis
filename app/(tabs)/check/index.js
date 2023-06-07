import {View, Text} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

const Check = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Link href="/check/results">results</Link>
      <Link href="/check/results/inner">inner</Link>
    </View>
  );
};

export default Check;
