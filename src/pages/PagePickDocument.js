import React, { useState, useCallback, useEffect, useMemo } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { colors } from "../config/colors";
import { fonts } from "../config/fonts";

const PagePickDocument = p => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraOpened, setCameraOpened] = useState(false);
  const [ratio, setRatio] = useState("4:3");
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const CameraView = () => {
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return <Camera style={s.camera}></Camera>;
  };
  let camera = null;
  return (
    <View style={s.container}>
      {cameraOpened ? (
        <Camera
          ref={ref => {
            camera = ref;
          }}
          onCameraReady={async () => {
            const { ratio } = await camera.getSupportedRatiosAsync();
          }}
          style={s.camera}
        >
          <TouchableOpacity
            style={s.buttonTakePicture}
            onPress={async () => {
              if (camera) {
                let options = { base64: true, quality: 0.8 };
                let photo = await camera.takePictureAsync(options);
                setPicture(photo);
                p.navigation.navigate("ImageValidation", { picture: photo });
              }
            }}
          >
            <Text style={s.text}>{"Scanner ordonnance"}</Text>
          </TouchableOpacity>
        </Camera>
      ) : (
        <View>
          <TouchableOpacity
            style={s.button}
            onPress={() => setCameraOpened(true)}
          >
            <Text style={s.text}>{"Scanner ordonnance"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.button}>
            <Text style={s.text}>{"Importer depuis mes fichiers Maiia"}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  camera: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: fonts.title,
    textAlign: "center"
  },
  buttonTakePicture: {
    backgroundColor: colors.secondary,
    marginBottom: 20,
    padding: 12,
    borderRadius: 20
  }
});

export default PagePickDocument;
