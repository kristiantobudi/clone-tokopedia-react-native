import React from "react";
import HeaderHome from "@/components/HeaderHome";
import MenuShopping from "@/components/MenuShopping";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <>
      <HeaderHome />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MenuShopping />
      </GestureHandlerRootView>
    </>
  );
}
