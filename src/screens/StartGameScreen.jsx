import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, useWindowDimensions, View } from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ pickNum }) => {
  const [input, setInput] = useState("");

  const { width, height } = useWindowDimensions();

  const resetInput = () => setInput("");

  const inputHandler = (input) => setInput(input);

  const handleConfirm = () => {
    const enteredNum = parseInt(input);
    if (isNaN(enteredNum) || enteredNum <= 0 || enteredNum > 99) {
      Alert.alert("Invalid Number!", "Number has tobe a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
    pickNum(enteredNum);
  };

  const marginTop = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess Game</Title>
          <Card>
            <InstructionText>Enter a number:</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={input}
              onChangeText={inputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 32,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
