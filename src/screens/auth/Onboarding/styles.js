import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    flex: 1,
  },
  content: {
    padding: 46,
    paddingTop: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#173147",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 400,
    color: "#8B97A8",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default styles;
