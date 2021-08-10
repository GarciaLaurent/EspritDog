import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../pages/profile/Profile";
import ProfileSettings from "../pages/profile/ProfileSettings";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="ProfileSettings" component={ProfileSettings} />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;
