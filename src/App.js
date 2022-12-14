import { useState } from "react";
import { registerRootComponent } from "expo";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });
  const [pickedNum, setPickedNum] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickNum = (num) => {
    setIsGameOver(false);
    setPickedNum(num);
  };

  const gameOverHandler = (numberOfRounds) => {
    setIsGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGame = () => {
    setPickedNum(NaN);
    setIsGameOver(false);
    screen = <StartGameScreen pickNum={pickNum} />;
  };

  let screen = <StartGameScreen pickNum={pickNum} />;
  if (pickedNum) screen = <GameScreen pickedNum={pickedNum} onGameOver={gameOverHandler} />;
  if (isGameOver && pickedNum)
    screen = <GameOverScreen pickedNum={pickedNum} roundsNum={guessRounds} onStartNewGame={startNewGame} />;

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground
          source={require("../assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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
