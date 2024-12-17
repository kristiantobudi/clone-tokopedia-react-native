import BadgeAccount from "@/components/ui/BadgeAccount";
import BadgeUi from "@/components/ui/BadgeUi";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

export default function Dashboard() {
  return (
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
      <BadgeUi />
    </View>
  );
}
