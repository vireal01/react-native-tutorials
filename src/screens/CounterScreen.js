import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return { ...state, counter: state.counter - action.payload };
    case 'reset':
      return { ...state, counter: 0 };
    default: return state
  }
}

const counterStep = 1

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })
  return <View>
    <Button title='Increase' onPress={() => dispatch({ type: 'increase', payload: counterStep })} />
    <Button title='Decrease' onPress={() => dispatch({ type: 'decrease', payload: counterStep })} />
    <Button title='Reset' onPress={() => dispatch({ type: 'reset' })} />
    <Text style={styles.text}>Current count:</Text>
    <Text style={styles.text}>{state.counter}</Text>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    margin: 10,
    alignSelf: 'center'
  },
});

export default CounterScreen;
