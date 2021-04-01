import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PageStatusCommand from './src/pages/PageStatusCommand.js';
import Router from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>

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
