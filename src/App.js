import { registerRootComponent } from "expo";
import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return <StartGameScreen />;
}

const styles = StyleSheet.create({});

registerRootComponent(App);
