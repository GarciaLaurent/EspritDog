import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import statusCommand from 'src/config/command-status';
import variables from 'src/config/variables';

const PageStatusCommand = (p) => {
  const [status, setStatus] = useState(statusCommand[1]);

  /** ******************************************************************************************************************
   * Helper rendering
   *********************************************************************************************************************/
  const renderStatusIndicator = (item) => {
    return(
      <View style={s.containerStatusIndicator}>
        <Text>{item.label}</Text>
      </View>
    )
  };

  return (
    <View style={s.container}>
      <FlatList
        horizontal={true}
        data={statusCommand}
        renderItem={({item}) => renderStatusIndicator(item)}
      />
    </View>
  );
};

const s = StyleSheet.create({
  // containers
  container: {

  },

  containerStatusIndicator: {
    flex: 1,
    // width: variables.SCREEN_WIDTH / 5,
  }
});

export default PageStatusCommand;
