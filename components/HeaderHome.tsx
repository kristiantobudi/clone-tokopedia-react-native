import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HeaderHome() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 12,
              flex: 1,
              marginRight: 10,
              paddingHorizontal: 10,
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              height: 40,
            }}
          >
            <TouchableOpacity>
              <Icon
                name="search"
                size={24}
                style={{ marginRight: 2, color: "#888" }}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Cari di Tokopedia"
              placeholderTextColor={"#888"}
              style={{ flex: 1, fontSize: 16, color: "white" }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity>
              <View style={{ position: "relative" }}>
                <Icon name="email" size={24} style={{ color: "#fff" }} />
                <View
                  style={{
                    position: "absolute",
                    top: -5,
                    right: -10,
                    width: 16,
                    height: 16,
                    borderRadius: 10,
                    backgroundColor: "red",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 12, color: "#fff", fontWeight: "bold" }}
                  >
                    4
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ position: "relative" }}>
                <Icon
                  name="notifications"
                  size={24}
                  style={{ color: "#fff" }}
                />
                <View
                  style={{
                    position: "absolute",
                    right: -6,
                    top: -5,
                    backgroundColor: "red",
                    width: 16,
                    height: 16,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 12, color: "#fff", fontWeight: "bold" }}
                  >
                    5
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="shopping-cart" size={24} style={{ color: "#fff" }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="menu" size={24} style={{ color: "#fff" }} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4CAF50",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
