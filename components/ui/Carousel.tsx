import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ProgressBarAndroidBase,
} from "react-native";
import { ProgressBar } from "react-native-paper";

export default function Carousel() {
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
      <View
        style={{
          marginBottom: 10,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Poppins",
            color: "#111827",
            marginRight: 8,
          }}
        >
          In Progress
        </Text>
        <Text
          style={{
            paddingHorizontal: 8,
            paddingVertical: 2,
            backgroundColor: "#EEE9FF",
            borderRadius: 5,
            color: "#5F33E1",
            fontFamily: "Poppins",
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          6
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={[
            {
              marginHorizontal: 10,
              borderRadius: 12,
              padding: 16,
            },
            { backgroundColor: "#E8F0FE" },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 12, color: "#6B7280", fontWeight: "500" }}>
              Office Project
            </Text>
            <Ionicons name="briefcase" size={20} color="#F28BFF" />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 10,
            }}
          >
            Grocery shopping app design
          </Text>
          <ProgressBar
            progress={0.5}
            color="#0087FF"
            style={{ height: 6, borderRadius: 3, backgroundColor: "#D1D5DB" }}
          />
        </View>

        <View
          style={[
            {
              height: 120,
              marginHorizontal: 10,
              borderRadius: 12,
              padding: 16,
            },
            { backgroundColor: "#FFE9E1" },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 12, color: "#6B7280", fontWeight: "500" }}>
              Personal Project
            </Text>
            <Ionicons name="person-circle" size={20} color="#FF9472" />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 10,
            }}
          >
            Uber Eats redesign challenge
          </Text>
          <ProgressBar
            progress={0.5}
            color="#FF9472"
            style={{ height: 6, borderRadius: 3, backgroundColor: "#D1D5DB" }}
          />
        </View>

        <View
          style={[
            {
              height: 120,
              marginHorizontal: 10,
              borderRadius: 12,
              padding: 16,
            },
            { backgroundColor: "#EDE4FF" },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 12, color: "#6B7280", fontWeight: "500" }}>
              Personal Project
            </Text>
            <Ionicons name="person-circle" size={20} color="#9260F4" />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#111827",
              marginBottom: 10,
            }}
          >
            Uber Eats redesign challenge
          </Text>
          <ProgressBar
            progress={0.5}
            color="#9260F4"
            style={{ height: 6, borderRadius: 3, backgroundColor: "#D1D5DB" }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
