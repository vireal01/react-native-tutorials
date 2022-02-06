import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return <View style={styles}>
        <Button
            title='Add a color' onPress={() => {
                setColors([...colors, randomRgb()])
            }} />
        <FlatList
            style={styles.row}
            keyExtractor={(item) => item}
            data={colors}
            onScrollEndDrag={() => { setColors([...colors, randomRgb()]) }}
            renderItem={({ item }) => {
                return <View style={styles.row}>
                    <View style={{ ...styles.box, backgroundColor: item }} />
                </View>
            }}
        />
    </View>
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
    text: {
        fontSize: 80,
        margin: 30
    },
    row: {
        flexDirection: "row"
    },
    box: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        flexDirection: 'row',
    }
});

export default ColorScreen;
