import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

const InnerScreen = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([
    'Goal #1',
    'Goal #2',
    'Goal #3',
    'Goal #4',
    'Goal #5',
    'Goal #6',
    'Goal #7',
    'Goal #8',
    'Goal #9',
    'Goal #10',
    'Goal #11',
    'Goal #12',
    'Goal #13',
    'Goal #14',
    'Goal #15',
    'Goal #16',
  ]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    // setGoals([enteredGoalText, ...goals]);
    setGoals((currentGoals) => [enteredGoalText, ...currentGoals]);
    setEnteredGoalText('');
  };

  const onPressHandler = (item) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal !== item));
  };

  const GoalItem = ({onPressHandler, text}) => {
    // console.log(this);
    return (
      // <Pressable onPress={onPressHandler.bind(this, text)}>
      <Pressable onPress={() => onPressHandler(text)}>
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{text}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text>InnerScreen</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your goal..."
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item} onPressHandler={onPressHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            return index;
          }}
        />
      </View>
    </View>
  );
};

export default InnerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 24,
  },
  textInput: {
    // flex: 1,
    width: '70%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    backgroundColor: '#78ccbc',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
    width: 300,
  },
  goalText: {
    // fontWeight: 700,
    fontSize: 18,
    color: 'white',
  },
});
