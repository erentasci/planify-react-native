import React from "react";
import { SafeAreaView, Text, View, Linking } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Title from "../../../components/Title";
import Checkbox from "../../../components/Checkbox";
import { PRIVACY_POLICY_LINK } from "../../../components/constants/links";
import { TERMS_CONDITIONS_LINK } from "../../../components/constants/links";

const Signup = ({ navigation }) => {
  const [agreed, setAgreed] = React.useState(false);

  const onCheckboxPress = () => {
    setAgreed((value) => !value);
  };

  const onLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the Hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />

      <View style={styles.row}>
        <Checkbox checked={agreed} onPress={onCheckboxPress} />
        <Text style={styles.agreeText}>
          I agree to{" "}
          <Text
            style={styles.link}
            onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>
            Terms and Conditions
          </Text>{" "}
          and{" "}
          <Text
            style={styles.link}
            onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
            Privacy Policy
          </Text>
        </Text>
      </View>

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
