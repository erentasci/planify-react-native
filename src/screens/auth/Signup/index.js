import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Title from "../../../components/Title";

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the Hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />

      <Button type="blue">Create a new account</Button>
      <Text style={styles.footerText}>
        Already registered?
        <Text
          onPress={() => navigation.navigate("Signin")}
          style={styles.footerLink}>
          {" "}
          Sign in!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
