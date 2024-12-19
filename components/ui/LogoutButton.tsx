import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import BadgeUi from "./BadgeUi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useSession } from "@/app/ctx";
import { logout } from "@/utils/setting";

export default function LogoutButton() {
  const { signOut } = useSession();
  const handleLogout = async () => {
    try {
      await logout();
      AsyncStorage.removeItem("token");
      signOut();
      router.replace("/(auth)/login");
    } catch {
      console.error("Error logging out");
    }
  };
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <BadgeUi />
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableOpacity onPress={handleLogout}>
          <MaterialIcons name={"logout"} size={24} color={"#000"} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              fontFamily: "Poppins-Regular",
              color: "#000",
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
