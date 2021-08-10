import { filter, map } from "lodash";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal
} from "react-native";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import pharmacies from "../config/list-pharmacies";
import { apiCreateOrder, apiGetOrder } from "src/utils/api";
import { colors } from "src/config/colors";

const PageFindPharmacy = props => {
  const { pharmacyOrder } = props?.route?.params;

  const [i, setI] = useState(null);

  const pharmacy = map(pharmacies, removeLogo);
  function removeLogo(p) {
    p.logo = null;
    return p;
  }
  const cleanPharmacies = p => {
    return filter(p, pharmacie => {
      return pharmacie?.address?.zipCode.startsWith("75");
    });
  };

  const MarkerCustom = (p, index) => {
    index++
    return (
      <Marker
        style={{ backgroundColor: "blue", zIndex: 999999 }}
        key={index}
        coordinate={{
          longitude: p.address?.location?.coordinates[0],
          latitude: p.address?.location?.coordinates[1]
        }}
        title={p.name}
        description={p.city}
        pinColor={s.marker.color}
      />
    );
  };

  const initRegion = {
    latitude: 48.8566969,
    longitude: 2.3514616,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2
  };

  const [region, setRegion] = useState(initRegion);

  const allPharma = cleanPharmacies(pharmacy);

  return (
    <View style={s.container}>
      <Modal transparent={true}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            const p = allPharma[0];

            const datas = {
              pharmacyOrder: {
                pharmacyItem: p,
                user: "Barack Afritt",
                status: "ORDERED",
                items: pharmacyOrder?.meds || [],
                photo: pharmacyOrder?.image || null
              }
            };

            apiCreateOrder(datas?.pharmacyOrder).then(res => {
              apiGetOrder(res?.id).then(res => {
                props.navigation.navigate("StatusCommand", {
                  pharmacyOrder: res,
                  adress: p.address
                });
              });
            });
          }}
        ></TouchableOpacity>
      </Modal>

      <MapView style={s.map} initRegion={region} region={region}>
        {allPharma.map((p, index) => {
          return <MarkerCustom {...p} index={index} />;
        })}
      </MapView>
    </View>
  );
};

const s = StyleSheet.create({
  // containers
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  marker: {
    color: colors.primary
  }
});

export default PageFindPharmacy;
