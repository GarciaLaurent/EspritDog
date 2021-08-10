import React, {
  createRef,
  useRef,
  useMemo,
  useCallback,
  useState,
} from "react";
import { Text, Dimensions, View, StyleSheet, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Formations from "../pages/formations/Formations";
import Home from "../pages/formations/startFormation/Home";
import Start from "../pages/formations/startFormation/Start";
import Tips from "../pages/formations/startFormation/Tips";
import Pedigree from "../pages/formations/startFormation/Pedigree";
import Profile from "../pages/profile/Profile";
import ProfileSettings from "../pages/profile/ProfileSettings";
import UpdatePassword from "../pages/profile/UpdatePassword";

import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import BottomSheet from "react-native-simple-bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";

const FormationStack = createStackNavigator();

const FormationStackScreen = (props) => {
  //const login = useSelector((state) => state.login.value);
  //const user = useSelector((state) => state.currentUser.value);
  const panelRef = useRef();

  const redirect = () => {
    panelRef.current.togglePanel();
    props.navigation.navigate("ProfileSettings");
  };

  const { height } = Dimensions.get("window");

  return (
    <>
      <FormationStack.Navigator>
        <FormationStack.Screen
          name="Formations"
          component={Formations}
          options={{
            title: "Esprit Dog Formations",
            headerStyle: {
              backgroundColor: "#5298cc",
            },
            headerTintColor: "#fff",
            headerRight: () => (
              <TouchableOpacity onPress={() => panelRef.current.togglePanel()}>
                <Feather
                  name="user"
                  size={25}
                  color="black"
                  style={{
                    margin: 10,
                    padding: 5,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 50,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <FormationStack.Screen
          name="StartHome"
          component={Home}
          options={{
            title: "ESPRIT DOG START",
            headerStyle: {
              backgroundColor: "#cfc955",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <FormationStack.Screen
          name="Start"
          component={Start}
          options={{
            title: "ESPRIT DOG START",
            headerStyle: {
              backgroundColor: "#cfc955",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <FormationStack.Screen
          name="Tips"
          component={Tips}
          options={{
            title: "SELECTION YOUTUBE",
            headerStyle: {
              backgroundColor: "#cfc955",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <FormationStack.Screen
          name="Pedigree"
          component={Pedigree}
          options={{
            title: "RACES DE CHIEN",
            headerStyle: {
              backgroundColor: "#cfc955",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <FormationStack.Screen
          name="ProfileSettings"
          options={{
            title: "Informations du compte",
            headerStyle: {
              backgroundColor: "#5298cc",
            },
            headerTintColor: "#fff",
          }}
          component={ProfileSettings}
        />
        <FormationStack.Screen
          name="UpdatePassword"
          options={{
            title: "Changement de mot de passe",
            headerStyle: {
              backgroundColor: "#5298cc",
            },
            headerTintColor: "#fff",
          }}
          component={UpdatePassword}
        />
      </FormationStack.Navigator>
      <>
        <BottomSheet
          ref={(ref) => (panelRef.current = ref)}
          sliderMinHeight={0}
          isOpen={false}
          sliderMaxHeight={600}
          wrapperStyle={{ height: 600 }}
          innerContentStyle={{ height: 600 }}
        >
          <Profile onPress={() => redirect()} />
        </BottomSheet>
      </>
    </>
  );
};

export default FormationStackScreen;
