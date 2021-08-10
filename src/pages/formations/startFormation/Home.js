import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const startImg = {
  uri: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/5/8/858743bb35_50169458_chien-min.jpg",
};
const astuceImg = {
  uri: "https://cdn.1min30.com/wp-content/uploads/2017/03/Symbole-YouTube.jpg",
};
const raceImg = {
  uri: "https://monchienetmoi.fr/wp-content/uploads/2019/12/iStock-857174584-e1575474647281.jpg",
};

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper]}>
        <TouchableOpacity
          style={[styles.wrapper, styles.btn]}
          onPress={() => props.navigation.navigate("Start")}
        >
          <Image source={startImg} style={[styles.image]} />
          <Text style={styles.text}>ESPRIT DOG START</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.wrapper]}>
        <TouchableOpacity
          style={[styles.wrapper, styles.btn]}
          onPress={() => props.navigation.navigate("Tips")}
        >
          <Image source={astuceImg} style={[styles.image]} />
          <Text style={styles.text}>SELECTION YOUTUBE</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.wrapper]}>
        <TouchableOpacity
          style={[styles.wrapper, styles.btn]}
          onPress={() => props.navigation.navigate("Pedigree")}
        >
          <Image source={raceImg} style={[styles.image]} />
          <Text style={styles.text}>FICHES DE RACES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(245, 166, 35, 0.14)",
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 25,
    backgroundColor: "#FFFFFF",
    width: "100%",
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    opacity: 0.9,
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
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
});

export default Home;
