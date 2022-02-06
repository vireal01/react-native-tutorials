import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15
/**
 * 
 * @param {*} state {red: number, green: number, green: number}
 * @param {*} action {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
 * @returns 
 */
const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      if (state.red + action.payload > 255) {
        return { ...state, red: 255 };
      } else if (state.red + action.payload < 0) {
        return { ...state, red: 0 };
      } else {
        return { ...state, red: state.red + action.payload }
      };
    case 'change_green':
      if (state.green + action.payload > 255) {
        return { ...state, green: 255 };
      } else if (state.green + action.payload < 0) {
        return { ...state, green: 0 };
      } else {
        return { ...state, green: state.green + action.payload }
      };
    case 'change_blue':
      if (state.blue + action.payload > 255) {
        return { ...state, blue: 255 };
      } else if (state.blue + action.payload < 0) {
        return { ...state, blue: 0 };
      } else {
        return { ...state, blue: state.blue + action.payload }
      };
    default: return state;
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state

  return <View style={styles.container}>
    <ColorCounter
      onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
      onDecrease={() => dispatch({ type: 'change_red', payload: -COLOR_INCREMENT })}
      color="Red" />
    <ColorCounter
      onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
      onDecrease={() => dispatch({ type: 'change_green', payload: -COLOR_INCREMENT })}
      color="Green" />
    <ColorCounter
      onIncrease={() => dispatch({ type: 'chnage_blue', payload: COLOR_INCREMENT })}
      onDecrease={() => dispatch({ type: 'change_blue', payload: -COLOR_INCREMENT })}
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