import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View style={style.container}>
        <ImageDetail
            title="Forest"
            imagePath={require('../../assets/images/forest.jpg')}
            imageScore="420" />
        <ImageDetail
            title="Beach"
            imagePath={require('../../assets/images/beach.jpg')}
            imageScore="88" />
        <ImageDetail
            title="Mountain"
            imagePath={require('../../assets/images/mountain.jpg')}
            imageScore="-1" />
    </View>
};

const style = StyleSheet.create({
    text: {
        fontSize: 20,
        marginLeft: 20
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
    }
});

export default ImageScreen;