import React from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";

const Home = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Start")}>
          <Card>
            <Card.Cover
              source={{
                uri: "https://www.espritdog.com/wp-content/uploads/2020/09/dog-1149964_1920-e1613888456379.jpg",
              }}
            />
            <Card.Content style={styles.card_content}>
              <Title style={{ textAlign: "center", paddingTop: 10 }}>
                MES VIDEOS
              </Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Tips")}>
          <Card>
            <Card.Cover
              source={{
                uri: "https://cdn.1min30.com/wp-content/uploads/2017/03/Symbole-YouTube.jpg",
              }}
            />
            <Card.Content style={styles.card_content}>
              <Title style={{ textAlign: "center", paddingTop: 10 }}>
                SELECTION YOUTUBE
              </Title>
            </Card.Content>
          </Card>
          {/* <Image source={startImg} style={[styles.image]} />
          <Text style={styles.text}>ESPRIT DOG START</Text> */}
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Pedigree")}>
          <Card>
            <Card.Cover
              source={{
                uri: "https://monchienetmoi.fr/wp-content/uploads/2019/12/iStock-857174584-e1575474647281.jpg",
              }}
            />
            <Card.Content style={styles.card_content}>
              <Title style={{ textAlign: "center", paddingTop: 10 }}>
                FICHES DE RACES
              </Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(245, 166, 35, 0.14)",
  },
  wrapper: {
    margin: 10,
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
  card_content: {
    backgroundColor: "#FFFFFF",
  },
});

export default Home;
