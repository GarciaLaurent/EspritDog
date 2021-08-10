import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppHome from "../navigation/AppHome";
import AuthenticationStack from "../navigation/AuthenticationStack";
import { useSelector } from "react-redux";

const Authentication = (props) => {
  const isLogin = useSelector((state) => state.login.value);

  return <>{isLogin === false ? <AuthenticationStack /> : <AppHome />}</>;
};

export default Authentication;
