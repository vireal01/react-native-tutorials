import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return <View>
        <Button title='Increase' onPress={() => {
            setCounter(counter + 1)
        }} />
        <Button title='Decrease' onPress={() => {
            setCounter(counter - 1)
        }} />
        <Button title='Reset' onPress={() => {
            setCounter(0)
        }} />
        <Text>Current count {counter}</Text>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 80,
        margin: 30
    },
});

export default CounterScreen;
