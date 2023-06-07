import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

const List = () => {
  return (
    <View style={styles.container}>
      <Link href="/list/1" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>List One</Text>
        </Pressable>
      </Link>
      <Link href="/list/2" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>List Two</Text>
        </Pressable>
      </Link>
      <Link href="/list/3" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>List Three</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 1,
  },
  button: {
    backgroundColor: 'navy',
    paddingHorizontal: 15,
    paddingVertical: 40,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
