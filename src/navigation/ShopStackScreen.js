import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Shop from "../pages/shop/Shop";

const ShopStack = createStackNavigator();

const ShopStackScreen = () => (
  <ShopStack.Navigator>
    <ShopStack.Screen name="Shop" component={Shop} />
  </ShopStack.Navigator>
);

export default ShopStackScreen;
