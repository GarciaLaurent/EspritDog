import React from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from '@expo-google-fonts/inter';
import Router from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import PageFindPharmacy from './src/pages/PageFindPharmacy.js';

console.disableYellowBox = true;

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.otf'),
    'SFProDisplay-SemiBold': require('./assets/fonts/SFProDisplay-Semibold.otf'),
    'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
