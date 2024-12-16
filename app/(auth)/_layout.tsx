import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Login from "./login";

const image = require("../../assets/images/background.png");

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Login />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
