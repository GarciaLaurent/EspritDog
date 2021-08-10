import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { WebView } from "react-native-webview";
import Spinner from "react-native-loading-spinner-overlay";

const DATA = [
  {
    id: "1",
    title: "Avant de commencer",
    url: "https://player.vimeo.com/video/493083698",
    image: "https://i.vimeocdn.com/video/1019664906",
  },
  {
    id: "2",
    title: "Le bien-être animal",
    url: "https://player.vimeo.com/video/493061531",
    image: "https://i.vimeocdn.com/video/1019620498",
  },
  {
    id: "3",
    title: "Êtes vous prêt à avoir un chien ?",
    url: "https://player.vimeo.com/video/493064470",
    image: "https://i.vimeocdn.com/video/1019627880",
  },
  {
    id: "4",
    title: "Dans quel but prendre un chien ?",
    url: "https://player.vimeo.com/video/493066606",
    image: "https://i.vimeocdn.com/video/1019630799",
  },
  {
    id: "5",
    title: "Quel budget?",
    url: "https://player.vimeo.com/video/493061720",
    image: "https://i.vimeocdn.com/video/1019621744",
  },
  {
    id: "6",
    title: "Où trouver son chien ? : Eleveurs",
    url: "https://player.vimeo.com/video/493068472",
    image: "https://i.vimeocdn.com/video/1019638050",
  },
  {
    id: "7",
    title: "Où trouver son chien ? : Animalerie",
    url: "https://player.vimeo.com/video/493060826",
    image: "https://i.vimeocdn.com/video/1019619139",
  },
  {
    id: "8",
    title: "Où trouver son chien ? : Particuliers",
    url: "https://player.vimeo.com/video/493076617",
    image: "https://i.vimeocdn.com/video/1019651580",
  },
  {
    id: "9",
    title: "Où trouver son chien ? : Refuges",
    url: "https://player.vimeo.com/video/493078478",
    image: "https://i.vimeocdn.com/video/1019654851",
  },
  {
    id: "10",
    title: "Quel type de chien choisir ?",
    url: "https://player.vimeo.com/video/493077153",
    image: "https://i.vimeocdn.com/video/1019652980",
  },
  {
    id: "11",
    title: "Adopter un chien adulte",
    url: "https://player.vimeo.com/video/493063395",
    image: "https://i.vimeocdn.com/video/1019625844",
  },
  {
    id: "12",
    title: "Les Papiers du chien",
    url: "https://player.vimeo.com/video/493076505",
    image: "https://i.vimeocdn.com/video/1019650310",
  },
  {
    id: "13",
    title: "Les besoins du chien",
    url: "https://player.vimeo.com/video/493061078",
    image: "https://i.vimeocdn.com/video/1019619918",
  },
  {
    id: "14",
    title: "A quoi sert le dressage ?",
    url: "https://player.vimeo.com/video/493068059",
    image: "https://i.vimeocdn.com/video/1019633768",
  },
  {
    id: "15",
    title: "Ordres: Assis",
    url: "https://player.vimeo.com/video/493072417",
    image: "https://i.vimeocdn.com/video/1019642116",
  },
  {
    id: "16",
    title: "Ordres: Couché",
    url: "https://player.vimeo.com/video/493072890",
    image: "https://i.vimeocdn.com/video/1019644363",
  },
  {
    id: "17",
    title: "Ordres: Au pied",
    url: "https://player.vimeo.com/video/493072511",
    image: "https://i.vimeocdn.com/video/1019642957",
  },
  {
    id: "18",
    title: "Ordres: Pas bouger",
    url: "https://player.vimeo.com/video/493073998",
    image: "https://i.vimeocdn.com/video/1019645607",
  },
  {
    id: "19",
    title: "Ordres: Pas toucher",
    url: "https://player.vimeo.com/video/493074236",
    image: "https://i.vimeocdn.com/video/1019646206",
  },
  {
    id: "20",
    title: "Ordres: Reste",
    url: "https://player.vimeo.com/video/493074576",
    image: "https://i.vimeocdn.com/video/1019647245",
  },
  {
    id: "21",
    title: "Marche en laisse",
    url: "https://player.vimeo.com/video/493073416",
    image: "https://i.vimeocdn.com/video/1019645229",
  },
  {
    id: "23",
    title: "Développer la confiance",
    url: "https://player.vimeo.com/video/493066938",
    image: "https://i.vimeocdn.com/video/1019631719",
  },
  {
    id: "24",
    title: "Apprendre à se contrôler",
    url: "https://player.vimeo.com/video/493067338",
    image: "https://i.vimeocdn.com/video/1019632927",
  },
  {
    id: "25",
    title: "Développer l'imagination",
    url: "https://player.vimeo.com/video/493070309",
    image: "https://i.vimeocdn.com/video/1019639292",
  },
  {
    id: "26",
    title: "5 erreurs que tout le monde fait",
    url: "https://player.vimeo.com/video/493060272",
    image: "https://i.vimeocdn.com/video/1019618052",
  },
  {
    id: "27",
    title: "Le mythe des 5 min par mois d'âge",
    url: "https://player.vimeo.com/video/493060628",
    image: "https://i.vimeocdn.com/video/1019618859",
  },
  {
    id: "28",
    title: "Quelle récompense ?",
    url: "https://player.vimeo.com/video/493077981",
    image: "https://i.vimeocdn.com/video/1019654067",
  },
  {
    id: "29",
    title: "Les fausses idées",
    url: "https://player.vimeo.com/video/493069614",
    image: "https://i.vimeocdn.com/video/1019637767",
  },
  {
    id: "30",
    title: "La Loi",
    url: "https://player.vimeo.com/video/493071232",
    image: "https://i.vimeocdn.com/video/1019640577",
  },
  {
    id: "31",
    title: "Conséquences d'une morsure",
    url: "https://player.vimeo.com/video/493062430",
    image: "https://i.vimeocdn.com/video/1019623669",
  },
  {
    id: "32",
    title: "La muselière",
    url: "https://player.vimeo.com/video/493071692",
    image: "https://i.vimeocdn.com/video/1019642024",
  },
  {
    id: "33",
    title: "L'évaluation vétérinaire",
    url: "https://player.vimeo.com/video/493814535",
    image: "https://i.vimeocdn.com/video/1021129012",
  },
];

const Start = (props) => {
  const [videoUrl, setVideoUrl] = useState();
  const [visible, setVisible] = useState();

  useEffect(() => {
    setVideoUrl(DATA?.[0]?.url);
  }, []);
  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setVideoUrl(item?.url);
      }}
    >
      <View style={styles.item}>
        <View style={styles.containerImage}>
          <Image source={{ uri: item.image }} style={[styles.image]} />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{item?.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const showSpinner = () => {
    setVisible(true);
  };

  const hideSpinner = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Spinner
          visible={visible}
          textContent={"Chargement..."}
          textStyle={{ color: "#FFFFFF" }}
          size="small"
        />
        <WebView
          style={{ flex: 1, backgroundColor: "#000" }}
          source={{ uri: videoUrl }}
          automaticallyAdjustContentInsets
          allowsFullscreenVideo
          startInLoadingState={true}
          onLoadStart={() => showSpinner()}
          onLoad={() => hideSpinner()}
        />
      </View>
      <View style={styles.containerVideoList}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          horizontal
          keyExtractor={(item) => item.id}
          pagingEnabled={true}
          style={styles.flatList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  containerVideoList: {
    flex: 1,
    backgroundColor: "rgba(245, 166, 35, 0.14)",
  },
  containerTitle: {
    height: "20%",
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  item: {
    flex: 1,
    marginHorizontal: 5,
    width: 300,
    height: "100%",
    marginLeft: 5,
    marginRight: 5,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
  },
  flatList: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Start;
