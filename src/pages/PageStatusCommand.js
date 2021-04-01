import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import statusCommand from 'src/config/command-status';

const PageStatusCommand = (p) => {
  const [status, setStatus] = useState(statusCommand[1]);

  /** ******************************************************************************************************************
   * Helper rendering
   *********************************************************************************************************************/
  const renderStatusIndicator = (item) => {
    return(
      <View>
        {item.label}
      </View>
    )
  };

  return (
    <View style={s.container}>
      <FlatList
        data={statusCommand}
        renderItem={({item}) => renderStatusIndicator(item)}
      />
    </View>
  );
};

const s = StyleSheet.create({
  // containers
  container: {

  }
});

export default PageStatusCommand;
