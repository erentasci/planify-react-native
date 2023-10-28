import React from "react";
import { Pressable, View } from "react-native";
import styles from "./styles";

const Checkbox = ({ onPress, checked }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, checked ? styles.checkedBox : {}]}>
      {checked ? <View style={styles.innerSquare}></View> : null}
    </Pressable>
  );
};

export default React.memo(Checkbox);
