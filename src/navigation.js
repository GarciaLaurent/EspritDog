import React from "react";
import PagePickDocument from "./pages/PagePickDocument";
import PageFindPharmacy from "./pages/PageFindPharmacy";
import PageStatusCommand from "./pages/PageStatusCommand";
import ImageValidation from "./pages/ImageValidation";
import RecapImage from './pages/RecapImage';
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "src/config/colors";
import { fonts } from "src/config/fonts";

const Stack = createStackNavigator();

const Router = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: fonts.title
    }
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="PickDocument"
        component={PagePickDocument}
        options={{
          title: "Votre ordonnance",
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="ImageValidation"
        component={ImageValidation}
        options={{
          title: "Votre ordonnance",
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="RecapImage"
        component={RecapImage}
        options={{
          title: "Mon ordonnance",
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="FindPharmacy"
        component={PageFindPharmacy}
        options={{
          title: "Votre pharmacie",
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="StatusCommand"
        component={PageStatusCommand}
        options={{
          title: "Votre commande",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
