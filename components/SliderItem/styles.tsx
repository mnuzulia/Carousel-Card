import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: width,
  },
  background: {
    position: "absolute",
    height: 500,
    width: 300,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 20,
    padding: 20,
  },
  image: {
    width: 300,
    height: 500,
    borderRadius: 20,
  },
  contentWrapper: { gap: 10, flex: 1, justifyContent: "flex-end" },
  title: { color: "#ffff", letterSpacing: 1.5 },
  desc: { color: "#ffff", letterSpacing: 1.2 },
});

export default styles;
