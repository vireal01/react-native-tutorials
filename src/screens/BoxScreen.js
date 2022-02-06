import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return <View style={style.viewStyle}>
        <Text style={style.textOneStyle}>Box Screen 1</Text>
        <Text style={style.textTwoStyle}>Box Screen 2</Text>
        <Text style={style.textThreeStyle}>Box Screen 3</Text>
    </View>
}

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderColor: "#000000",
        margin: 20,
        height: 300,
        // alignItems: "center",
        // justifyContent: "center",
        // flexDirection: "row",
        flexDirection: "column",
        justifyContent: "space-between"

    },
    textOneStyle: {
        borderWidth: 3,
        padding: 2,
        borderColor: "#ff0000",
        width: 100,
        height: 100,
        alignSelf: "flex-start"
    },
    textTwoStyle: {
        borderWidth: 3,
        padding: 2,
        borderColor: "#ff0000",
        width: 100,
        height: 100,
        bottom: 100,
        alignSelf: "center"

    },
    textThreeStyle: {
        borderWidth: 3,
        padding: 2,
        borderColor: "#ff0000",
        width: 100,
        height: 100,
        position: "absolute",
        alignSelf: "flex-end"
    }
})

export default BoxScreen;