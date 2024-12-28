import { Ionicons } from "@expo/vector-icons";
import { View, Text, ScrollView } from "react-native";
import { ProgressBar } from "react-native-paper";

export default function TaskGroup() {
  return (
    <View style={{ paddingHorizontal: 10 }}>
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
          Task Groups
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
          4
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentOffset={{ x: 0, y: 0 }}
        overScrollMode="auto"
      >
        <View
          style={[
            {
              marginHorizontal: 10,
              borderRadius: 12,
              padding: 16,
              marginBottom: 20,
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
              marginHorizontal: 10,
              borderRadius: 12,
              padding: 16,
              marginBottom: 20,
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
              marginHorizontal: 10,
              borderRadius: 12,
              padding: 16,
              marginBottom: 20,
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
              marginHorizontal: 10,
              borderRadius: 12,
              padding: 16,
              marginBottom: 20,
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
      </ScrollView>
    </View>
  );
}
