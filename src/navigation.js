import React from "react";
import PagePickDocument from "./pages/PagePickDocument";
import PageFindPharmacy from "./pages/PageFindPharmacy";
import PageStatusCommand from "./pages/PageStatusCommand";
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
        name="StatusCommand"
        component={PageFindPharmacy}
        options={{
          title: "Votre commande"
        }}
      />

      <Stack.Screen
        name="FindPharmacy"
        component={PageFindPharmacy}
        options={{
          title: "Votre pharmacie"
        }}
      />
      <Stack.Screen
        name="PickDocument"
        component={PagePickDocument}
        title={{
          title: "Votre ordonnance"
        }}
      />

      {/*<Stack.Screen*/}
      {/*  name="StatusCommand"*/}
      {/*  component={PageStatusCommand}*/}
      {/*  title={{*/}
      {/*    title: "Votre ordonnance"*/}
      {/*  }}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
};

export default Router;
