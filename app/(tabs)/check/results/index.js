import {View, Text} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

const Results = () => {
  return (
    <View>
      <Text>Results</Text>
      <Link href="/check/results/inner">Inner</Link>
    </View>
  );
};

export default Results;
