import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ imagePath, imageScore, title }) => {
    return <View style={style.view}>
        <Image source={imagePath} />
        <Text style={style.text}>{title}</Text>
        <Text style={style.score}>Image score: {imageScore}</Text>
    </View>
};

const style = StyleSheet.create({
    text: {
        fontSize: 20
    },
    score: {
        fontSize: 15
    },
    view: {
        borderWidth: 1,
        flex: 0.3,
        padding: 20,
        margin: 10
    }
});

export default ImageDetail;