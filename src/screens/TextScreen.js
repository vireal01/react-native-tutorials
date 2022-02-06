import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('')
    return <View>
        <Text style={style.text1}>Enter name:</Text>
        <TextInput
            style={style.input}
            autoCapitalize='none'
            autoCorrect={false}
            multiline={true}
            value={name}
            onChangeText={(newText) => { setName(newText) }}
        />
        <Text style={style.text1, style.text2}>My name is {name}</Text>
    </View>
}

const style = StyleSheet.create({
    text1: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20
    },
    input: {
        margin: 15,
        borderColor: "#000000",
        borderWidth: 1,
        fontSize: 30
    },
    text2: {
        alignSelf: "center",
        fontSize: 40,
    }
});

export default TextScreen;