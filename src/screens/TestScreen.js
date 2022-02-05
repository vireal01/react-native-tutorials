import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TestScreen = () => {
    return <Text style={style.text}>Test1</Text>
}

const style = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default TestScreen;
