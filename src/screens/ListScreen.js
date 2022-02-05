import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const names = [
        { name: 'Friend 1', age: 23 },
        { name: 'Friend 2', age: 24 },
        { name: 'Friend 3', age: 25 },
        { name: 'Friend 4', age: 26 },
        { name: 'Friend 5', age: 27 },
        { name: 'Friend 6', age: 28 },
        { name: 'Friend 7', age: 20 },
        { name: 'Friend 8', age: 18 },
    ]
    return <View>
        <FlatList
            data={names}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>
                    {item.name} - Age {item.age}</Text>
            }}
            keyExtractor={aName => aName.name} />
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20,
        fontSize: 20,
        marginHorizontal: 40
    }
})

export default ListScreen;