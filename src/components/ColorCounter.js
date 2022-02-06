import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return <View style={styles.view}>
        <Text style={styles.textStyle}> {color} </Text>
        <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
        <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 5,
        fontSize: 20,
        alignSelf: "center",
        marginBottom: 5
    },
    view: {
        borderWidth: 1,
        // padding: 20,
        margin: 10,
        height: 110,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default ColorCounter;