import { useState } from "react";
import { registerRootComponent } from "expo";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [pickedNum, setPickedNum] = useState();

  const pickNum = (num) => setPickedNum(num);

  let screen = <StartGameScreen pickNum={pickNum} />;
  if (pickedNum) screen = <GameScreen />;

  return (
    <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

registerRootComponent(App);
