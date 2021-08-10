import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TextInput, HelperText, ActivityIndicator } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { logIn } from "src/features/data/loginSlice.js";
import { currentUser } from "src/features/data/userSlice.js";
import { apiCreateUser } from "src/utils/api";
import Spinner from "react-native-loading-spinner-overlay";
import { Formik } from "formik";
import * as yup from "yup";

const CreateUser = (props) => {
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eyeIcon, setEyeIcon] = useState("eye-off");
  const [showPassword, setShowPassword] = useState(true);

  const dispatch = useDispatch();

  const onShowPassword = () => {
    eyeIcon == "eye-off" ? setEyeIcon("eye") : setEyeIcon("eye-off");
    setShowPassword(!showPassword);
  };

  const loginValidationSchema = yup.object().shape({
    firstname: yup.string().required("Prénom requis!"),
    lastname: yup.string().required("Nom requis!"),
    email: yup.string().email("Email non valide").required("Email requis!"),
    password: yup
      .string()
      .min(
        8,
        ({ min }) => `Le mot de passe doit avoir ${min} characters au minimum`
      )
      .required("Mot de passe requis !"),
  });

  const createUser = (values) => {
    const user = {
      firstName: values.firstname,
      lastName: values.lastname,
      username: values.email,
      password: values.password,
    };
    setLoading(true);
    apiCreateUser(user).then((res) => {
      setLoading(false);
      if (res) {
        console.log(res);
        dispatch(currentUser(res));
        dispatch(logIn());
      } else {
        setLoginError("Cette adresse mail est déjà utilisée");
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Spinner
        visible={loading}
        textContent={"Chargement..."}
        textStyle={{ color: "#FFFFFF" }}
        size="small"
      />
      <View>
        <Text style={styles.title}>Nouveau sur ESPRIT DOG?</Text>
        <Text style={styles.subTitle}>Créez votre compte !</Text>
      </View>
      <View style={styles.wrapper}>
        <View>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => createUser(values)}
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
                  name="firstname"
                  placeholder="Prénom*"
                  value={values.email}
                  onChangeText={handleChange("firstname")}
                  onBlur={handleBlur("firstname")}
                  value={values.firstname}
                  style={styles.input}
                />

                {errors.firstname && (
                  <Text style={{ fontSize: 10, color: "#FF0000" }}>
                    {errors.firstname}
                  </Text>
                )}
                <TextInput
                  name="lastname"
                  placeholder="Nom*"
                  value={values.email}
                  onChangeText={handleChange("lastname")}
                  onBlur={handleBlur("lastname")}
                  value={values.lastname}
                  style={styles.input}
                />

                {errors.lastname && (
                  <Text style={{ fontSize: 10, color: "#FF0000" }}>
                    {errors.lastname}
                  </Text>
                )}
                <TextInput
                  name="email"
                  placeholder="Email*"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
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
                  value={values.password}
                  secureTextEntry={showPassword}
                  placeholderTextColor={"gray"}
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
                      isValid ? styles.btn_signin : styles.btn_signin_disable
                    }
                    onPress={() => handleSubmit()}
                    disabled={!isValid}
                  >
                    <Text style={styles.btn_text_signin}>S'inscrire</Text>
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
export default CreateUser;
