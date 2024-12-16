import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MenuItem, MenuShoppingData } from "@/constants/MenuShopping";
import { FlatList } from "react-native-gesture-handler";

const menuData: MenuItem[] = MenuShoppingData;

export default function MenuShopping() {
  const renderItem = ({ item }: { item: MenuItem }) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: "center",
          marginHorizontal: 10,
          paddingVertical: 10,
          paddingHorizontal: 5,
          gap: 5,
        }}
      >
        <Image
          source={item.icon}
          style={{ width: 30, height: 30, marginBottom: 5 }}
        />
        <Text
          style={{
            fontSize: 10,
            color: "black",
            textAlign: "center",
            fontWeight: "400",
            fontFamily: "Poppins-Regular",
          }}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: "#fff",
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
