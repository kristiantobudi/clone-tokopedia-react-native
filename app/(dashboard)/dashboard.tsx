import TaskGroup from "@/components/TaskGroup";
import BadgeAccount from "@/components/ui/BadgeAccount";
import BadgeUi from "@/components/ui/BadgeUi";
import Carousel from "@/components/ui/Carousel";
import LogoutButton from "@/components/ui/LogoutButton";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import PagerView from "react-native-pager-view";

export default function Dashboard() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <BadgeAccount />
        <LogoutButton />
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#5F33E1",
            padding: 20,
            width: 350,
            height: 150,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.1,
            elevation: 5,
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <MaterialIcons name={"more-horiz"} size={24} color={"#fff"} />
          </TouchableOpacity>
          <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "Poppins-Regular",
                }}
              >
                Your today's task
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "Poppins-Regular",
                }}
              >
                almost done!
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                borderRadius: 8,
                paddingVertical: 2,
                paddingHorizontal: 10,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "#5F33E1", fontWeight: "bold" }}>
                View Task
              </Text>
            </TouchableOpacity>
          </View>

          <AnimatedCircularProgress
            size={70}
            width={8}
            fill={85}
            tintColor="#fff"
            backgroundColor="#8C4CF5"
            rotation={0}
            lineCap="round"
            style={{ marginLeft: 10, marginTop: 10 }}
          >
            {(fill) => (
              <Text
                style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}
              >{`${fill.toFixed(0)}%`}</Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <Carousel />
      </View>
      <View style={{ marginTop: 10, flex: 1 }}>
        <TaskGroup />
      </View>
    </View>
  );
}
