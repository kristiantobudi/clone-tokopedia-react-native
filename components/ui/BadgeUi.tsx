import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

export default function BadgeUi() {
  return (
    <View style={{ position: "relative", padding: 6 }}>
      <TouchableOpacity>
        <Ionicons name={"notifications"} style={{ fontSize: 30 }} />
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 3,
            backgroundColor: "red",
            borderRadius: 100,
            width: 10,
            height: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
