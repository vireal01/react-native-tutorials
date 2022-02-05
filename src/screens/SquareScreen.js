import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";
const COLOR_INCREMENT = 15

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = ({ color, change }) => {
    switch (color) {
      case 'red':
        return red + change > 255 || red + change < 0 ? red : red + change;
      case 'green':
        return green + change > 255 || green + change < 0 ? green : green + change
      case 'blue':
        return blue + change > 255 || blue + change < 0 ? blue : blue + change;
      default: throw new Error('invalid color')
    }
  }

  return <View style={styles.container}>
    <ColorCounter
      onIncrease={() => setRed(setColor({
        color: "red",
        change: +COLOR_INCREMENT
      }))}
      onDecrease={() => setRed(
        setColor({
          color: "red",
          change: -COLOR_INCREMENT
        })
      )}
      color="Red" />
    <ColorCounter
      onIncrease={() => setGreen(setColor({
        color: "green",
        change: +COLOR_INCREMENT
      }))}
      onDecrease={() => setGreen(
        setColor({
          color: "green",
          change: -COLOR_INCREMENT
        })
      )}
      color="Green" />
    <ColorCounter
      onIncrease={() => setBlue(setColor({
        color: "blue",
        change: +COLOR_INCREMENT
      }))}
      onDecrease={() => setBlue(
        setColor({
          color: "blue",
          change: -COLOR_INCREMENT
        })
      )}
      color="Blue" />
    <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
  </View>

}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  container: {
    alignItems: "center",
  }
})

export default SquareScreen;