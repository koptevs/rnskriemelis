import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Tabs, useRouter} from 'expo-router';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import {themePalette} from '../theme';

const HeaderRight = () => {
  const navigation = useRouter();
  return (
    <Ionicons
      onPress={() => navigation.replace('/')}
      name="home-outline"
      size={24}
      color={themePalette.white}
      style={{marginRight: 15}}
    />
  );
};

export default HeaderRight;

const styles = StyleSheet.create({});
