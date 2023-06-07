import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InnerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>InnerScreen</Text>
    </View>
  );
};

export default InnerScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', gap: 1},
});
