import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children }) => {
  const handlePress = () => console.log("hello world");

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: { color: "white", textAlign: "center" },
  pressed: {
    opacity: Platform.OS === "ios" ? 0.75 : 1,
  },
});
