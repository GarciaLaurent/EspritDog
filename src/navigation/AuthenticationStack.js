import React, { useEffect, useRef, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "../pages/user/LoginForm";
import CreateUserForm from "../pages/user/CreateUserForm";

const FormStack = createStackNavigator();

const AuthenticationStack = (props) => {
  return (
    <>
      <FormStack.Navigator>
        <FormStack.Screen
          name="SignIn"
          options={{
            title: "Connexion",
            headerShown: false,
          }}
          component={LoginForm}
        />
        <FormStack.Screen
          name="CreateUser"
          options={{
            title: "S'inscrire",
            headerStyle: {
              backgroundColor: "#5298cc",
            },
            headerTintColor: "#fff",
          }}
          component={CreateUserForm}
        />
      </FormStack.Navigator>
    </>
  );
};

export default AuthenticationStack;
