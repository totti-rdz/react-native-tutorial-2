import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import generateRandomNumBetween from "../utils/generateRandomNumBetween";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ pickedNum, onGameOver }) => {
  const initialGuess = generateRandomNumBetween(1, 100, pickedNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  // direction = "lower" or "greater"
  const nextGuessHandler = (direction) => {
    if ((direction === "lower" && currentGuess < pickedNum) || (direction === "greater" && currentGuess > pickedNum)) {
      Alert.alert("Oops!", `You're number is not ${direction} as the current guess.`, [{ text: "Sorry!", style: "cancel" }]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandNum = generateRandomNumBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandNum);
  };

  useEffect(() => {
    if (currentGuess === pickedNum) {
      onGameOver();
    }
  }, [currentGuess, pickedNum]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <Text>Log Rounds</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
