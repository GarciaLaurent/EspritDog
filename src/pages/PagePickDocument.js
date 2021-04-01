import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';

const PagePickDocument = (p) => {
  return (
    <View style={s.container}>
      <Text>Scan ordonnance</Text>
    </View>
  );
};

const s = StyleSheet.create({
  // containers
  container: {}
});

export default PagePickDocument;
