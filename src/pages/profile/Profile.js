import React, { useRef, useMemo } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logOut } from "src/features/data/loginSlice.js";
import { useSelector } from "react-redux";
import { TextInput, List } from "react-native-paper";
import Collapsible from "react-native-collapsible/Accordion";

const Profile = (props) => {
  const { onPress } = props;
  const currentUser = useSelector((state) => state.currentUser.value);
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logOut());
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Mon profile</Text>
      </View>
      <View style={styles.account}>
        <Text>{currentUser?.firstName}</Text>
        <Text>{currentUser?.lastName}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={onPress} style={styles.btn_option}>
          <Feather name="settings" size={20} color="#000000" />
          <Text style={styles.btn_text_options}>Informations du compte</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logout}>
        <TouchableOpacity onPress={() => signOut()} style={styles.btn_logout}>
          <FontAwesome name="sign-out" size={24} color="#FF0000" />
          <Text style={styles.btn_text_logout}>Deconnexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  account: {
    borderBottomColor: "#5298cc",
    borderBottomWidth: 2,
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
  btn_option: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  btn_text_options: {
    color: "#000000",
    paddingLeft: 10,
    fontWeight: "bold",
  },
  // delete: {
  //   flex: 1,
  // },
  // delete_text: {
  //   textDecorationStyle: "solid",
  //   textDecorationLine: "underline",
  //   color: "#FF0000",
  //   textAlign: "center",
  // },
});

export default Profile;
