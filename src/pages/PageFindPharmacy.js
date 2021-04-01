import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const PageFindPharmacy = ({navigation}) => {
    return (
        <View style={s.container}>
            <Text>Recherche une pharamcie</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('PickDocument')}>
                <Text>
                    test
                </Text>
            </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  // containers
  container: {}
});

export default PageFindPharmacy;
