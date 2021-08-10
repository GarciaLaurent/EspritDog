import React, { useRef, useMemo } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Button } from "react-native";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logOut } from "src/features/data/loginSlice.js";
import { useSelector } from "react-redux";
import { TextInput, Modal, Portal } from "react-native-paper";
import { apiDeleteUser } from "src/utils/api";

const ProfileSettings = (props) => {
  const currentUser = useSelector((state) => state.currentUser.value);
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
  };

  const deleteAccount = () => {
    apiDeleteUser(currentUser._id).then((res) => {
      dispatch(logOut());
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.account}>
        <View style={styles.input_wrapper}>
          <TextInput
            name="email"
            value={currentUser?.username}
            placeholderTextColor={"gray"}
            style={styles.input}
            disabled={true}
            label="Email"
            left={<TextInput.Icon name="email" color="gray" />}
          />
        </View>
        <View style={styles.email}>
          <TextInput
            name="password"
            value={currentUser?.password}
            placeholderTextColor={"gray"}
            secureTextEntry={true}
            style={styles.input}
            disabled={true}
            label="Mot de passe"
            outlineColor={"gray"}
            left={<TextInput.Icon name="lock" color="gray" />}
          />
          <TouchableOpacity
            style={styles.btn_update}
            onPress={() => props.navigation.navigate("UpdatePassword")}
          >
            <Text style={styles.btn_text_update}>Modifier</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.delete}>
          <TouchableOpacity style={styles.btn_delete} onPress={showModal}>
            <Text style={styles.delete_text}>Supprimer le compte</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text style={styles.delete_modal_text}>
              Etes-vous sûr de vouloir SUPPRIMER votre compte ?
            </Text>
            <View style={styles.btn_modal_delete}>
              <TouchableOpacity
                style={styles.btn_modal_delete_confirmation}
                onPress={() => deleteAccount()}
              >
                <Text style={styles.btn_text_update}>Confirmation</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn_modal_delete_cancel}
                onPress={() => setVisible(false)}
              >
                <Text style={styles.btn_text_update}>Annulation</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  input_wrapper: {
    flexDirection: "row",
  },
  title: {
    color: "#5298cc",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  btn_update: {
    backgroundColor: "#5298cc",
    borderRadius: 20,
    position: "absolute",
    right: 0,
    top: 10,
    marginRight: 5,
  },
  btn_text_update: {
    textAlign: "center",
    padding: 10,
    color: "#FFFFFF",
  },
  input: {
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  options: {
    borderBottomColor: "#5298cc",
    borderBottomWidth: 2,
  },
  btn_logout: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  btn_text_logout: {
    color: "#FF0000",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  delete: {
    flex: 1,
    marginTop: 80,
  },
  delete_text: {
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    color: "#FF0000",
    textAlign: "center",
  },
  btn_modal_delete: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
  },
  delete_modal_text: {
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
  },
  btn_modal_delete_confirmation: {
    backgroundColor: "#32CD32",
    borderRadius: 20,
    marginRight: 5,
  },
  btn_modal_delete_cancel: {
    backgroundColor: "#B22222",
    borderRadius: 20,
    marginRight: 5,
  },
});

export default ProfileSettings;
