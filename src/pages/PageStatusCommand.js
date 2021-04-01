import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import statusCommand from "src/config/command-status";
import { variables } from "src/config/variables";
import { fonts } from "src/config/fonts";
import { api } from "src/config/api";
import io from "socket.io-client";
import { find } from "lodash";
import MapView, { Marker } from "react-native-maps";
import { colors } from "src/config/colors";

const socket = io(api.URL, {
  transports: ["websocket"]
});

const PageStatusCommand = p => {
  let { pharmacyOrder, adress = {} } = p?.route?.params || {};
  // if (!pharmacyOrder) {
  //   pharmacyOrder = {
  //     _id: "6065c7cf793cd62ecc6acd60",
  //     status: "ORDERED",
  //     user: "Barack Afritt",
  //     pharmacyItem: {
  //       name: "Pharmacie de la Place",
  //       address: {
  //         number: "11",
  //         street: "Place Ledru-rollin",
  //         zipCode: "72400",
  //         city: "La Ferté-Bernard",
  //         country: "France",
  //         inseeCode: "72132",
  //         location: { type: "Point", coordinates: [0.657932, 48.185082] }
  //       }
  //     },
  //     items: [
  //       {
  //         name: "Doliprane",
  //         quantity: 2
  //       },
  //       {
  //         name: "Imodium",
  //         quantity: 1
  //       },
  //       {
  //         name: "Spasfon",
  //         quantity: 2
  //       }
  //     ],
  //     photo: null
  //   };
  // }

  // local states
  const [apiOrderResult, setApiOrderResult] = useState(pharmacyOrder);
  const selectedStatus = useMemo(() => {
    return find(statusCommand, s => {
      return s.status === apiOrderResult.status;
    });
  }, [apiOrderResult]);

  /** ******************************************************************************************************************
   * Callbacks / handles
   *********************************************************************************************************************/
  const handleWS = () => {
    socket.connect();

    socket.on("message", message => {
      console.log("Message WS", message);
      setApiOrderResult(message);
    });

    socket.on("connect_error", error => {
      console.log("Error WS", error);
    });

    socket.on("reconnect", error => {
      console.log("reconnect", error);
    });
  };

  /** ******************************************************************************************************************
   * Lifecycles
   *********************************************************************************************************************/
  useEffect(() => {
    handleWS();
  }, []);

  /** ******************************************************************************************************************
   * Helper rendering
   *********************************************************************************************************************/
  const renderAdresse = () => {
    const { number, street, zipCode, city, country } = adress || {};
    return (
      <View>
        <Text style={s.textAdresse}>
          {pharmacyOrder?.pharmacy || ''}
          {'\n'}
          {number + " " + street + " " + zipCode + " "}
        </Text>

        <MapView
          style={s.containerMap}
          initialRegion={{
            latitude: 48.8566969,
            longitude: 2.3514616,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        >
          <Marker
            key={"add"}
            coordinate={{
              longitude: adress?.location?.coordinates[0],
              latitude: adress?.location?.coordinates[1]
            }}
            pinColor={colors.primary}
          />
        </MapView>
      </View>
    );
  };

  const renderFinished = () => {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../../assets/images/vector.png")}
          resizeMode={"contain"}
          style={s.imageFinished}
        />

        <Text style={s.textCommandOK}>{"Commande bien collectée."}</Text>

        <TouchableOpacity style={s.buttonOrderAgain}>
          <Text style={s.textOrderAgain}>
            {"Programmez la prochaine commande"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{ color: colors.secondary, textDecorationLine: "underline" }}
          >
            {"Voir la facture"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderStatusIndicator = item => {
    const isSelected = item.status === apiOrderResult.status;

    return (
      <View
        style={[
          s.containerStatusIndicator,
          isSelected && s.containerStatusIndicatorSelected
        ]}
      >
        <View
          style={[s.containerLine, isSelected && s.containerLineSelected]}
        />

        {isSelected ? (
          <View>
            <Text style={s.textLabelStatus}>{item.label}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View style={s.container}>
      <View style={s.containerHeader}>
        <FlatList
          horizontal={true}
          data={statusCommand}
          renderItem={({ item }) => renderStatusIndicator(item)}
        />

        {selectedStatus?.image ? (
          <Image
            source={selectedStatus.image}
            resizeMode={"contain"}
            style={s.image}
          />
        ) : null}

        {selectedStatus?.desc ? (
          <Text style={s.textDesc}>{selectedStatus?.desc}</Text>
        ) : null}

        {selectedStatus?.status === "READY" ? renderAdresse() : null}

        {selectedStatus?.status === "FINISHED" ? renderFinished() : null}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  // containers
  container: {
    padding: 5,
    paddingTop: 10
  },

  containerStatusIndicator: {
    width: variables.SCREEN_WIDTH / 5,
    marginHorizontal: 4
  },

  containerHeader: {
    alignItems: "center",
    justifyContent: "center"
  },

  containerStatusIndicatorSelected: {},

  containerLine: {
    height: 6,
    backgroundColor: "grey",
    opacity: 0.6,
    borderRadius: 10
  },

  containerMap: {
    width: variables.SCREEN_WIDTH,
    height: 180,
    marginTop: 20
  },

  containerLineSelected: {
    backgroundColor: "#06B437"
  },

  // buttons
  buttonOrderAgain: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.primary,
    marginTop: 70
  },

  // texts
  textLabelStatus: {
    fontFamily: fonts.regular,
    fontSize: 12,
    textAlign: "center",
    marginTop: 3,
    color: "#252525"
  },

  textOrderAgain: {
    color: "white",
    textAlign: "center"
  },

  textDesc: {
    fontFamily: fonts.title,
    fontSize: 14,
    color: "grey",
    textAlign: "center",
    marginVertical: 10
  },

  textAdresse: {
    fontFamily: fonts.titleBold,
    fontSize: 18,
    color: "#303030",
    textAlign: "center",
    marginVertical: 10,
    padding: 5,
  },

  textCommandOK: {
    textAlign: "center",
    color: "#303030",
    fontFamily: fonts.titleBold
  },

  // image
  image: {
    width: variables.SCREEN_WIDTH / 1.8,
    height: variables.SCREEN_WIDTH / 1.8,
    marginVertical: 10
  },

  imageFinished: {
    width: variables.SCREEN_WIDTH / 3,
    height: variables.SCREEN_WIDTH / 3,
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  }
});

export default PageStatusCommand;
