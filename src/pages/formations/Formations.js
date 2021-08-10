import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Formations = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.item}>
          <TouchableOpacity
            style={[styles.flex, styles.btn1, styles.btn]}
            onPress={() => props.navigation.navigate("StartHome")}
          >
            <Text style={styles.text}> Esprit Dog {"\n"} START </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={[styles.flex, styles.btn2, styles.btn]}>
            <Text style={styles.text}>Esprit Dog {"\n"} CHIOT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.item}>
          <TouchableOpacity style={[styles.flex, styles.btn3, styles.btn]}>
            <Text style={styles.text}>Esprit Dog {"\n"} FAMILY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={[styles.flex, styles.btn4, styles.btn]}>
            <Text style={styles.text}> Esprit Dog {"\n"} PRO</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.item}>
          <TouchableOpacity style={[styles.flex, styles.btn5, styles.btn]}>
            <Text style={styles.text}> Esprit Dog {"\n"} 1er Secours </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={[styles.flex, styles.btn6, styles.btn]}>
            <Text style={styles.text}>Prévention Morsures </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: "column",
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
  },
  item: {
    flex: 1,
  },
  flex: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  btn1: {
    backgroundColor: "#cfc955",
  },
  btn2: {
    backgroundColor: "#e78484",
  },
  btn3: {
    backgroundColor: "#bbd5a2",
  },
  btn4: {
    backgroundColor: "#149efc",
  },
  btn5: {
    backgroundColor: "#8b0000",
  },
  btn6: {
    backgroundColor: "#b8c1c7",
  },
});
export default Formations;
