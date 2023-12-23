import { View } from "react-native";
import { Home } from "./src/screens/Home";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
