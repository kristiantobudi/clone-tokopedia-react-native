import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TextInput } from "react-native-paper";

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
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleChange = (itemValue: string) => {
    setSelectedValue(itemValue);
  };

  const handleStartDateChange = (event: any, selectedDate?: Date) => {
    setShowStartPicker(Platform.OS === "ios");
    if (selectedDate) setStartDate(selectedDate);
  };

  const handleEndDateChange = (event: any, selectedDate?: Date) => {
    setShowEndPicker(Platform.OS === "ios");
    if (selectedDate) setEndDate(selectedDate);
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
          <View style={{ alignItems: "flex-start", flex: 1 }}>
            <TextInput
              mode="flat"
              label="Project Name"
              placeholder="Enter Project Name"
              style={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                fontSize: 16,
                fontWeight: "bold",
              }}
              outlineColor="#E5E5E5"
              activeOutlineColor="#5F33E1"
              textColor="#333333"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
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
          <TextInput
            mode="flat"
            label="Description"
            placeholder="Enter Description"
            multiline
            style={{
              width: "100%",
              minHeight: 100,
              backgroundColor: "#f5f5f5",
              fontSize: 14,
              fontWeight: "bold",
              paddingHorizontal: 10,
              textAlignVertical: "top",
            }}
            outlineColor="#E5E5E5"
            activeOutlineColor="#5F33E1"
            textColor="#333333"
          />
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
              backgroundColor: "#EDE4FF",
              borderRadius: 10,
              alignItems: "center",
              marginVertical: 10,
              marginHorizontal: 8,
            }}
          >
            <Ionicons name="calendar" size={24} color="#9260F4" />
          </View>
          <TouchableOpacity onPress={() => setShowStartPicker(true)}>
            <View style={{ alignItems: "flex-start" }}>
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 10,
                  marginTop: 5,
                  color: "#6E6A7C",
                }}
              >
                Start Date
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginBottom: 5,
                }}
              >
                {startDate?.toLocaleDateString() || "Select a date"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {showStartPicker && (
          <DateTimePicker
            value={startDate || new Date()}
            mode="date"
            display="default"
            onChange={handleStartDateChange}
          />
        )}

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
              backgroundColor: "#EDE4FF",
              borderRadius: 10,
              alignItems: "center",
              marginVertical: 10,
              marginHorizontal: 8,
            }}
          >
            <Ionicons name="calendar" size={24} color="#9260F4" />
          </View>
          <TouchableOpacity onPress={() => setShowEndPicker(true)}>
            <View style={{ alignItems: "flex-start" }}>
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 10,
                  marginTop: 5,
                  color: "#6E6A7C",
                }}
              >
                End Date
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginBottom: 5,
                }}
              >
                {endDate?.toLocaleDateString() || "Select a date"}
              </Text>
            </View>
          </TouchableOpacity>
          {showEndPicker && (
            <DateTimePicker
              value={endDate || new Date()}
              mode="date"
              display="default"
              onChange={handleEndDateChange}
            />
          )}
        </View>
      </View>

      <TouchableOpacity
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            paddingVertical: 10,
            borderRadius: 12,
            backgroundColor: "#5F33E1",
            marginTop: 20,
            paddingHorizontal: 20,
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "LexendDeca_700Bold",
              color: "white",
              fontSize: 20,
            }}
          >
            Add Task
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}
