import React from "react";
import { Text, SafeAreaView } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";

const Signin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome Back!</Title>

      <Input placeholder="Email" />
      <Input placeholder="Password" />

      <Button>Sign in</Button>

      <Text style={styles.footerText}>
        Not registered?
        <Text
          onPress={() => navigation.navigate("Signup")}
          style={styles.footerLink}>
          {" "}
          Sign up!{" "}
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signin);
