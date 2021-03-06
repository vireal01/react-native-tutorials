import React from "react";
import { Text, StyleSheet, View } from "react-native";


const ComponentsScreen = () => {
  const title = 'Getting started with react native!';
  const greeting = 'Seva'
  return (
    <View>
      <Text style={styles.titleStyle} >{title}</Text>
      <Text style={styles.greetingStyle} >My name is {greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingStyle: {
    fontSize: 20
  },
  titleStyle: {
    fontSize: 45
  }
})

export default ComponentsScreen;