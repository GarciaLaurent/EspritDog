import React from 'react';
import PagePickDocument from './pages/PagePickDocument';
import PageFindPharmacy from './pages/PageFindPharmacy';
import PageStatusCommand from './pages/PageStatusCommand';
import { createStackNavigator } from '@react-navigation/stack';
import {colors} from 'src/config/colors';
import {fonts} from 'src/config/fonts';

const Stack = createStackNavigator();

const Router = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: fonts.title,
    },
  };

    return (
        <Stack.Navigator screenOptions={screenOptions}>
          {/*<Stack.Screen name="StatusCommand" component={PageStatusCommand} />*/}
            <Stack.Screen name="FindPharmacy" component={PageFindPharmacy} />
            <Stack.Screen name="PickDocument" component={PagePickDocument} />
            <Stack.Screen name="StatusCommand" component={PageStatusCommand} />
        </Stack.Navigator>
    )
}

export default Router
