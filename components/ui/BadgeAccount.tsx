import { View, Text, Image } from "react-native";

const image = require("../../assets/icons/user.png");

export default function BadgeAccount() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={image}
        style={{ width: 50, height: 50, borderRadius: 30, marginRight: 10 }}
      />
      <View style={{ flexDirection: "column", marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
          Welcome!
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          Kristianto
        </Text>
      </View>
    </View>
  );
}
