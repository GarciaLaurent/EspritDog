import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { colors } from "src/config/colors";
import Authentication from "./src/authenticate/Authentication";
import store from "./src/app/store";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.otf"),
    "SFProDisplay-SemiBold": require("./assets/fonts/SFProDisplay-Semibold.otf"),
    "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#5298cc",
      accent: "#03dac4",
      background: "#FFFFFF",
      surface: "#FFFFFF",
      error: "#B00020",
      text: "#000000",
      // onSurface: '#000000',
      // disabled: color(black).alpha(0.26).rgb().string(),
      placeholder: "gray",
      // backdrop: color(black).alpha(0.5).rgb().string(),
      // notification: pinkA400,
    },
  };
  const styles = {
    touchable: {
      backgroundColor: colors.secondary,
      padding: 12,
      margin: 10,
      height: 100,
      width: "50%",
    },
    buttonContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
    },
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: "flex-end",
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "600",
    },
    itemCode: {
      fontWeight: "600",
      fontSize: 12,
      color: "#fff",
    },
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Authentication />
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}
