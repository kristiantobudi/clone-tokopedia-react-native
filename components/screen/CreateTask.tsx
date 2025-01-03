import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const image = require("../../assets/images/background.png");

const data = [
  {
    id: 1,
    title: "Work",
    description: "Work Description",
    date: "2023-09-01",
  },
  {
    id: 2,
    title: "Study",
    description: "Work Description",
    date: "2023-09-01",
  },
  {
    id: 3,
    title: "Project",
    description: "Work Description",
    date: "2023-09-01",
  },
];

export default function CreateTask() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (itemValue: string) => {
    setSelectedValue(itemValue);
  };
  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            alignItems: "flex-start",
            marginTop: 20,
          }}
        >
          Create Task
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
            marginVertical: 10,
            width: "90%",
            marginTop: 20,
          }}
        >
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 8,
              backgroundColor: "#FFE4F2",
              borderRadius: 10,
              alignItems: "center",
              marginVertical: 10,
              marginHorizontal: 8,
            }}
          >
            <Ionicons name="briefcase" size={24} color="#F28BFF" />
          </View>
          <View style={{ alignItems: "flex-start" }}>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 10,
                marginTop: 5,
                color: "#6E6A7C",
              }}
            >
              Task Group
            </Text>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={{ width: 290, fontSize: 14, fontWeight: "bold" }}
            >
              {data.map((item) => (
                <Picker.Item
                  key={item.id}
                  label={item.title}
                  value={item.title}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
            marginVertical: 10,
            width: "90%",
            marginTop: 20,
          }}
        >
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 8,
              backgroundColor: "#FFE4F2",
              borderRadius: 10,
              alignItems: "center",
              marginVertical: 10,
              marginHorizontal: 8,
            }}
          >
            <Ionicons name="reader" size={24} color="#F28BFF" />
          </View>
          <View style={{ alignItems: "flex-start" }}>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 10,
                marginTop: 5,
                color: "#6E6A7C",
              }}
            >
              Project Name
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 10 }}>
              Grocery Shopping App
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
