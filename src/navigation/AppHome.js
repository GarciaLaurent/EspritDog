import React from "react";
import { colors } from "src/config/colors";
import { fonts } from "src/config/fonts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import FormationStackScreen from "./FormationStackScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import ShopStackScreen from "./ShopStackScreen";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";

const Tab = createBottomTabNavigator();

const AppHome = (props) => {
  function StackTab() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Shop") {
              iconName = "shopping-cart";
            } else if (route.name === "Profile") {
              iconName = "user";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#5298cc",
          inactiveTintColor: "#acb0b1",
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={FormationStackScreen} />
        <Tab.Screen name="Shop" component={ShopStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    );
  }

  return <StackTab />;
};

export default AppHome;
