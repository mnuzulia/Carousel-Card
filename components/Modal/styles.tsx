import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 16,
  },
  desc: {
    color: "white",
    fontSize: 14,
  },
  gap20: { gap: 20 },
  flexEndPosition: { justifyContent: "flex-end", alignItems: "flex-end" },
  image: {
    width: 350,
    height: 500,
    borderRadius: 20,
  },
  contentWrapper: { justifyContent: "center", alignItems: "center", gap: 10 },
});

export default styles;
