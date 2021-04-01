import { filter, map } from 'lodash';
import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import pharmacies from '../config/list-pharmacies';

const PageFindPharmacy = (p) => {

  const pharmacy = map(pharmacies, removeLogo);
  function removeLogo(p) {
     p.logo = null;
     return p;
  }
  const cleanPharmacies = (p) => {
    return filter(p, (pharmacie) => {
      return pharmacie?.address?.zipCode.startsWith("75");
    });
  };

  const initRegion = {
    latitude: 48.8566969,
    longitude: 2.3514616,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  };

  const [region, setRegion] = useState(initRegion);

  const allPharma = cleanPharmacies(pharmacy);

  console.log(cleanPharmacies(pharmacy));

  return (
    <View style={s.container}>
      <Text>Recherche une pharamcie</Text>
      <MapView style={s.map}
      initRegion={region}
      region={region}
      >
        {allPharma.map((p, index) => {
          return (<MarkerCustom {...p} index={index}/>)
        })}
        </MapView>
    </View>
  );
};

function MarkerCustom(p, index) {
  return (
<View>
      <MarkerTitleCustom {...p}/>
      <Marker
                  key={index}
                  coordinate={{ longitude : p.address?.location?.coordinates[0], latitude : p.address?.location?.coordinates[1]}}
                  title={p.name}
                  description={p.city}
                  pinColor={s.marker.color}
                  onPress={() => alert('Click')}
                  />
</View>
    
                    );
}

function MarkerTitleCustom(p) {
  return (
    <View>
<Text>
        {p.name}
      </Text>
      <TouchableOpacity onPress={() => alert('Click')}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
    );
}

const s = StyleSheet.create({
  // containers
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  marker: {
    color: '#F68092'
  }
});

export default PageFindPharmacy;
