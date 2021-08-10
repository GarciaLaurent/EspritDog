import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TextInput, HelperText, ActivityIndicator } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { apiChangeUserPassword } from "src/utils/api";
import { Formik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { currentUser } from "src/features/data/userSlice.js";

const UpdatePassword = (props) => {
  const [hideOldPassword, setHideOldPassword] = useState(true);
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideConfirmedNewPassword, setHideConfirmedNewPassword] =
    useState(true);
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [oldPasswordEyeIcon, setOldPasswordEyeIcon] = useState("eye-off");
  const [newPasswordeyeIcon, setNewPasswordEyeIcon] = useState("eye-off");
  const [confirmedNewEyePasswordIcon, setConfirmedNewEyePasswordIcon] =
    useState("eye-off");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.currentUser.value);

  const onShowOldPassword = () => {
    oldPasswordEyeIcon == "eye-off"
      ? setOldPasswordEyeIcon("eye")
      : setOldPasswordEyeIcon("eye-off");
    setHideOldPassword(!hideOldPassword);
  };

  const onShowNewPassword = () => {
    newPasswordeyeIcon == "eye-off"
      ? setNewPasswordEyeIcon("eye")
      : setNewPasswordEyeIcon("eye-off");
    setHideNewPassword(!hideNewPassword);
  };

  const onShowConfirmedNewPassword = () => {
    confirmedNewEyePasswordIcon == "eye-off"
      ? setConfirmedNewEyePasswordIcon("eye")
      : setConfirmedNewEyePasswordIcon("eye-off");
    setHideConfirmedNewPassword(!hideConfirmedNewPassword);
  };

  const passwordValidationSchema = yup.object().shape({
    oldpassword: yup
      .string()
      .min(
        8,
        ({ min }) => `Le mot de passe doit avoir ${min} characters au minimum`
      )
      .required("Ancien mot de passe est requis!"),
    newpassword: yup
      .string()
      .min(
        8,
        ({ min }) => `Le mot de passe doit avoir ${min} characters au minimum`
      )
      .required("Nouveau mot de passe est requis!"),
    confirmednewpassword: yup
      .string()
      .oneOf(
        [yup.ref("newpassword"), null],
        "Le mot de passe ne correspond pas"
      )
      .min(
        8,
        ({ min }) => `Le mot de passe doit avoir ${min} characters au minimum`
      )
      .required("Confirmation du nouveau mot de passe est requis !"),
  });

  const updatePassword = (values) => {
    const userNewPassword = {
      id: user._id,
      newpassword: values.newpassword,
    };
    setLoading(true);
    apiChangeUserPassword(userNewPassword).then((res) => {
      setLoading(false);
      if (res?.user) {
        setLoading(false);
        dispatch(currentUser(res?.user));
        props.navigation.navigate("ProfileSettings");
      } else {
        setLoading(false);
        setLoginError("Aucun compte ne correspond à votre saisie.");
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Formik
            validationSchema={passwordValidationSchema}
            initialValues={{
              oldpassword: "",
              newpassword: "",
              confirmednewpassword: "",
            }}
            onSubmit={(values) => updatePassword(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <TextInput
                  name="oldpassword"
                  placeholder="Ancien mot de passe*"
                  onChangeText={handleChange("oldpassword")}
                  onBlur={handleBlur("oldpassword")}
                  value={values.oldpassword}
                  secureTextEntry={hideOldPassword}
                  placeholderTextColor={"gray"}
                  right={
                    <TextInput.Icon
                      name={oldPasswordEyeIcon}
                      onPress={() => onShowOldPassword()}
                    />
                  }
                  style={styles.input}
                />
                {errors.oldpassword && (
                  <Text style={{ fontSize: 10, color: "#FF0000" }}>
                    {errors.oldpassword}
                  </Text>
                )}
                <TextInput
                  name="newpassword"
                  placeholder="Nouveau mot de passe*"
                  onChangeText={handleChange("newpassword")}
                  onBlur={handleBlur("newpassword")}
                  value={values.newpassword}
                  secureTextEntry={hideNewPassword}
                  placeholderTextColor={"gray"}
                  right={
                    <TextInput.Icon
                      name={newPasswordeyeIcon}
                      onPress={() => onShowNewPassword()}
                    />
                  }
                  style={styles.input}
                />
                {errors.newpassword && (
                  <Text style={{ fontSize: 10, color: "#FF0000" }}>
                    {errors.newpassword}
                  </Text>
                )}
                <TextInput
                  name="confirmednewpassword"
                  placeholder="Confirmation du nouveau mot de passe*"
                  onChangeText={handleChange("confirmednewpassword")}
                  onBlur={handleBlur("confirmednewpassword")}
                  value={values.confirmednewpassword}
                  secureTextEntry={hideConfirmedNewPassword}
                  placeholderTextColor={"gray"}
                  right={
                    <TextInput.Icon
                      name={confirmedNewEyePasswordIcon}
                      onPress={() => onShowConfirmedNewPassword()}
                    />
                  }
                  style={styles.input}
                />
                {errors.confirmednewpassword && (
                  <Text style={{ fontSize: 10, color: "#FF0000" }}>
                    {errors.confirmednewpassword}
                  </Text>
                )}
                <View>
                  <TouchableOpacity
                    style={
                      isValid ? styles.btn_signin : styles.btn_signin_disable
                    }
                    onPress={() => handleSubmit()}
                    disabled={!isValid}
                  >
                    <ActivityIndicator
                      size="small"
                      color="#FFFFFF"
                      style={{ position: "absolute", right: 40, top: 8 }}
                      animating={loading}
                    />
                    <Text style={styles.btn_text_signin}>
                      Changer le mot de passe
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        <View>
          <Text style={styles.login_error}>{loginError}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  wrapper: {
    flex: 1,
    margin: 20,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 14,
  },
  btn: {
    margin: 20,
    backgroundColor: "#5298cc",
    padding: 10,
    borderRadius: 20,
    color: "#FFFFFF",
  },
  btn_text_signin: {
    padding: 10,
    color: "#FFFFFF",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 30,
    color: "#5298cc",
  },
  subTitle: {
    textAlign: "center",
    fontSize: 16,
  },
  btn_signin: {
    marginTop: 30,
    backgroundColor: "#5298cc",
    borderRadius: 20,
  },
  btn_signin_disable: {
    marginTop: 30,
    backgroundColor: "gray",
    borderRadius: 20,
  },
  login_error: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 10,
    color: "#FF0000",
  },
});

export default UpdatePassword;
