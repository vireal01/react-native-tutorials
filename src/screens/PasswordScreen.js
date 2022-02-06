import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const PasswordScreen = () => {
    const [password, setPassword] = useState('')
    return <View>
        <Text style={style.text1}>Enter your password: </Text>
        <TextInput
            style={style.input}
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            secureTextEntry={true}
        />
        {password.length >= 6 || password.length === 0 ?
            null :
            <Text style={style.passwordError}>Password must be longer than 5 characters</Text>}
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
    passwordError: {
        alignSelf: "center",
        fontSize: 20,
        color: 'red'
    }
});

export default PasswordScreen;