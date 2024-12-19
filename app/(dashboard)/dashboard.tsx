import BadgeAccount from "@/components/ui/BadgeAccount";
import BadgeUi from "@/components/ui/BadgeUi";
import LogoutButton from "@/components/ui/LogoutButton";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

export default function Dashboard() {
  return (
    <View>
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
      <View>
        <Text>Dashboard</Text>
      </View>
    </View>
  );
}
