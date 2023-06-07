import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Link} from 'expo-router';
import Checkbox from 'expo-checkbox';

const Check = () => {
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 20}}>
        <Link href="/check/results">results</Link>
        <Link href="/check/results/inner">inner</Link>
      </View>

      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text style={styles.paragraph}>Normal checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked2}
          onValueChange={setChecked2}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          disabled
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text style={styles.paragraph}>Disabled checkbox</Text>
      </View>
    </View>
  );
};

export default Check;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
    width: 30,
    height: 30,
    padding: 3,
  },
});
