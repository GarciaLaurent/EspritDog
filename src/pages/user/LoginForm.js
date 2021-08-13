import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { logIn } from "src/features/data/loginSlice.js";
import { currentUser } from "src/features/data/userSlice.js";
import { TextInput } from "react-native-paper";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { apiLogIn } from "src/utils/api";
import { Formik } from "formik";
import * as yup from "yup";

const LogInForm = (props) => {
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eyeIcon, setEyeIcon] = useState("eye-off");
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();

  const loginValidationSchema = yup.object().shape({
    email: yup.string().email("Email non valide").required("Email requis!"),
    password: yup
      .string()
      .min(
        8,
        ({ min }) => `Le mot de passe doit avoir ${min} characters au minimum`
      )
      .required("Mot de passe requis !"),
  });

  const onShowPassword = () => {
    eyeIcon == "eye-off" ? setEyeIcon("eye") : setEyeIcon("eye-off");
    setShowPassword(!showPassword);
  };

  const doLogIn = (values) => {
    setLoading(true);
    const user = {
      username: values.email,
      password: values.password,
    };
    apiLogIn(user).then((res) => {
      if (res?.user) {
        setLoading(false);
        dispatch(currentUser(res?.user));
        dispatch(logIn());
      } else {
        setLoading(false);
        setLoginError("Aucun compte ne correspond à votre saisie.");
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_wrapper}>
          <View style={styles.header_left}>
            <Text style={styles.text_header}> ESPRIT</Text>
          </View>
          <View style={styles.header_right}>
            <Text style={styles.text_header}>DOG</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Connexion</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => doLogIn(values)}
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
                  name="email"
                  placeholder="Email*"
                  placeholderTextColor={"gray"}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType="email-address"
                  style={styles.input}
                />

                {errors.email && (
                  <Text style={{ fontSize: 10, color: "#FF0000" }}>
                    {errors.email}
                  </Text>
                )}
                <TextInput
                  name="password"
                  placeholder="Mot de passe*"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry={showPassword}
                  right={
                    <TextInput.Icon
                      name={eyeIcon}
                      onPress={() => onShowPassword()}
                    />
                  }
                  style={styles.input}
                />
                {errors.password && (
                  <Text style={{ fontSize: 10, color: "#FF0000" }}>
                    {errors.password}
                  </Text>
                )}
                <View>
                  <TouchableOpacity
                    style={
                      isValid ? styles.btn_login : styles.btn_login_disable
                    }
                    onPress={() => handleSubmit()}
                    disabled={!isValid}
                  >
                    <Text style={styles.btn_text}>Connexion</Text>
                    <ActivityIndicator
                      size="small"
                      color="#FFFFFF"
                      style={{ position: "absolute", right: 90, top: 10 }}
                      animating={loading}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.login_error}>{loginError}</Text>
                </View>
              </>
            )}
          </Formik>
        </View>
        <View style={styles.create_account}>
          <View style={styles.separate} />
          <TouchableOpacity
            style={styles.btn_signin}
            onPress={() => props.navigation.navigate("CreateUser")}
          >
            <Text style={styles.btn_text_signin}>Pas encore de compte ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: getStatusBarHeight(),
  },
  header: {
    padding: 20,
    flexDirection: "column",
  },
  header_wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  header_left: {
    textAlign: "center",
    justifyContent: "center",
    padding: 5,
    borderWidth: 1,
    borderColor: "#5298cc",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  header_right: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#5298cc",
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  text_header: { fontSize: 50, fontWeight: "bold" },
  wrapper: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
  },
  input: {
    marginTop: 15,
    backgroundColor: "#FFFFFF",
  },
  btn_login: {
    marginTop: 30,
    backgroundColor: "#5298cc",
    borderRadius: 20,
  },
  btn_login_disable: {
    marginTop: 30,
    backgroundColor: "gray",
    borderRadius: 20,
  },
  btn_signin: {
    backgroundColor: "#FFFFFF",
    borderColor: "#5298cc",
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 20,
  },
  btn_text: {
    textAlign: "center",
    padding: 10,
    color: "#FFFFFF",
  },
  btn_text_signin: {
    textAlign: "center",
    padding: 10,
    color: "#5298cc",
  },
  separate: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  create_account: {
    marginTop: 40,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
    color: "#000000",
  },
  login_error: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 10,
    color: "#FF0000",
  },
});

export default LogInForm;
