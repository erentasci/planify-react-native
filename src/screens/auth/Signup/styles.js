import { StyleSheet } from "react-native";
import colors from "../../../components/constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  footerText: {
    textAlign: "center",
    fontSize: 15,
    color: colors.midGrey,
    marginTop: 28,
  },
  footerLink: {
    fontWeight: "bold",
    color: colors.purple,
  },
});

export default styles;
