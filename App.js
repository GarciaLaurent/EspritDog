import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PageStatusCommand from './src/pages/PageStatusCommand.js';

export default function App() {
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
