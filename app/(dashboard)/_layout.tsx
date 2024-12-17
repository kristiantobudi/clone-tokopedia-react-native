import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Dashboard from "./dashboard";

const image = require("../../assets/images/background.png");

export default function DashboardLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
          {/* {children} */}
          <Dashboard />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
