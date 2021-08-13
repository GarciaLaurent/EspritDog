import { setStatusBarBackgroundColor } from "expo-status-bar";
import { sortedIndex } from "lodash";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";

import Carousel, { Pagination } from "react-native-snap-carousel";

let carouselItems = [
  {
    title: "Esprit Dog START",
    subtitle: "La formation canine 100% en ligne et 100% gratuite !",
    url: "StartHome",
    color: "#fcbb14",
    thumbnail:
      "https://www.espritdog.com/wp-content/uploads/2020/09/dog-1149964_1920-e1613888456379.jpg",
    type: "PKG_START",
  },
  {
    title: "Esprit Dog CHIOT",
    subtitle: "Toutes les clés pour éduquer votre chiot !",
    url: "",
    color: "#f3bdc9",
    thumbnail:
      "https://www.espritdog.com/wp-content/uploads/2020/09/dog-3740318_1920.jpg",
    type: "PKG_PUPPY",
  },
  {
    title: "Esprit Dog FAMILY",
    subtitle: "Le numéro 1 de l’éducation canine en ligne !",
    url: "",
    color: "#adcba3",
    thumbnail:
      "https://www.espritdog.com/wp-content/uploads/2020/12/START-PHOTOV2-scaled.jpg",
    type: "PKG_FAMILY",
  },
  {
    title: "Esprit Dog PRO",
    subtitle: "Une formation théorique complète en ligne !",
    url: "",
    color: "#00a0ff",
    thumbnail:
      "https://www.espritdog.com/wp-content/uploads/2020/09/mammals-3231288_1920.jpg",
    type: "PKG_PRO",
  },
  {
    title: "Prévention Morsure",
    subtitle: "Eviter les morsures de chien !",
    url: "",
    color: "#838383",
    thumbnail:
      "https://www.espritdog.com/wp-content/uploads/2020/11/montage_morsure.jpg",
    type: "PKG_BITE",
  },
  {
    title: "Premiers secours",
    subtitle: "Apprendre à sauver son chien est primordial !",
    url: "",
    color: "#7a4a1d",
    thumbnail:
      "https://www.espritdog.com/wp-content/uploads/2020/11/SECOURS-4.jpg",
    type: "PKG_FIRST_AID",
  },
];

const FormationItem = (props) => {
  const { item, navigation } = props;
  const offers = useSelector((state) => state.currentUser.value.offer);
  let url = "Shop";
  let prefixBtnText = "Acheter";
  const hasOffer = offers.findIndex((offer) => item.type == offer.type) !== -1;
  if (hasOffer) {
    prefixBtnText = "Acces";
    url = item.url;
  }
  return (
    <View style={styles.item}>
      <>
        <Image
          source={{ uri: item.thumbnail }}
          resizeMode="cover"
          style={styles.image}
        />
      </>
      <View style={styles.item_wrapper}>
        <Text style={[styles.title]}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(url)}
          style={[styles.btn, { backgroundColor: item.color }]}
        >
          <Text style={styles.btn_text}>
            {prefixBtnText + " " + item.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Formations = (props) => {
  const [data, setData] = useState(carouselItems);
  const [index, setIndex] = useState(0);
  const carouselRef = React.useRef(null);
  const windowWidth = Dimensions.get("window").width;
  const cardOffset = 10;

  return (
    <View style={styles.container}>
      <Carousel
        layout={"default"}
        layoutCardOffset={cardOffset}
        ref={carouselRef}
        data={data}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        renderItem={(carouselItemsParam) => (
          <FormationItem
            {...carouselItemsParam}
            navigation={props.navigation}
          />
        )}
        onSnapToItem={(index) => setIndex(index)}
        style={styles.slider}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.5}
        containerStyle={styles.pagination}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    flex: 1,
    flexDirection: "row",
  },
  pagination: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  item_wrapper: {
    padding: 20,
  },
  item: {
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    color: "#FFFFFF",
    paddingBottom: 20,
    fontWeight: "bold",
    textShadowColor: "#0F0F0F",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#FFFFFF",
    paddingBottom: 20,
    fontWeight: "bold",
    textShadowColor: "#0F0F0F",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    textAlign: "center",
  },
  btn: {
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  btn_text: {
    textTransform: "uppercase",
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: "#5298cc",
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
  inactiveDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: "#FFFFFF",
    borderColor: "#0F0F0F",
  },
  image: {
    opacity: 0.4,
    backgroundColor: "#0F0F0F",
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});
export default Formations;
