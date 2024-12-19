import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Link, router } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackgroundImage from "@/components/ui/BackgroundImage";

export default function FirstPage() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasSeenFirstPage = await AsyncStorage.getItem("hasSeenFirstPage");
        if (hasSeenFirstPage) {
          setIsFirstLaunch(false);
          router.replace("/(dashboard)/dashboard");
        } else {
          setIsFirstLaunch(true);
        }
      } catch (error) {
        console.error("Error checking first launch status:", error);
        setIsFirstLaunch(true);
      }
    };

    checkFirstLaunch();
  }, []);

  const handleGetStarted = async () => {
    try {
      await AsyncStorage.setItem("hasSeenFirstPage", "true");
      router.replace("/(auth)/login");
    } catch (error) {
      console.error("Error setting first launch flag:", error);
    }
  };

  if (isFirstLaunch === null) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#5F33E1" />
      </SafeAreaView>
    );
  }

  if (!isFirstLaunch) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundImage />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          paddingHorizontal: 50,
        }}
      >
        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "LexendDeca_700Bold",
              color: "#333",
              textAlign: "center",
            }}
          >
            Task Management & To-Do List
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "LexendDeca_400Regular",
              color: "#333",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            This productive tool is designed to help you better manage your task
            project-wise conveniently!
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleGetStarted}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 12,
            backgroundColor: "#5F33E1",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "LexendDeca_700Bold",
              color: "white",
              fontSize: 16,
            }}
          >
            Let's Start
          </Text>
          <FontAwesome6 name={"arrow-right"} size={16} color={"white"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
