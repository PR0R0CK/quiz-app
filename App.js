import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import { useFonts, Inter_900Black, Inter_800ExtraBold, Inter_700Bold, Inter_500Medium } from '@expo-google-fonts/inter';



export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return (<View>
      <Text>Loading...</Text>
    </View>);
  }

  return (
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
