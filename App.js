import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PageStatusCommand from './src/pages/PageStatusCommand.js';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
    'SFProDisplay-Semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <PageStatusCommand />
    </View>
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
