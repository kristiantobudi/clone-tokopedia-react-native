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
        }}
      >
        <Image
          source={item.icon}
          style={{ width: 50, height: 50, marginBottom: 5 }}
        />
        <Text style={{ fontSize: 12, color: "#888", textAlign: "center" }}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
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
  );
}
