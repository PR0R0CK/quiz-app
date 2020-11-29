import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';



export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello!Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <HomePage></HomePage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
