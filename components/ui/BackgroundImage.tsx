import { View, Image } from "react-native";

const image = require("../../assets/images/Group 270.png");

export default function BackgroundImage() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image
        source={image}
        resizeMode="contain"
        width={100}
        height={100}
        style={{
          position: "absolute",
          flex: 1,
          width: "100%",
          alignItems: "center",
        }}
      />
    </View>
  );
}
