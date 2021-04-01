import React from 'react';
import PagePickDocument from './pages/PagePickDocument';
import PageFindPharmacy from './pages/PageFindPharmacy';
import PageStatusCommand from './pages/PageStatusCommand';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FindPharmacy" component={PageFindPharmacy} />
            <Stack.Screen name="PickDocument" component={PagePickDocument} />
            <Stack.Screen name="StatusCommand" component={PageStatusCommand} />
        </Stack.Navigator>
    )
}

export default Router