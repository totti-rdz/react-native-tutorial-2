import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import generateRandomNumBetween from "../utils/generateRandomNumBetween";

const GameScreen = ({ pickedNum }) => {
  const initialGuess = generateRandomNumBetween(1, 100, pickedNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        {/* +- */}
      </View>
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
});
