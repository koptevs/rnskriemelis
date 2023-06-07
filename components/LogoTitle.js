import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const LogoTitle = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 25, height: 25}}
        source={require('../assets/adaptive-icon.png')}
      />
      <Text
        style={{
          marginLeft: 12,
          fontFamily: 'Nunito_700Bold',
          fontSize: 20,
          color: 'white',
        }}>
        {props.children}
      </Text>
    </View>
  );
};

export default LogoTitle;

const styles = StyleSheet.create({});
