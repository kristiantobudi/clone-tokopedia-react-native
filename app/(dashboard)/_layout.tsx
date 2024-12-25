import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import Dashboard from "./dashboard";
import Calender from "./calender";
import Task from "./task";
import Account from "./account";

const image = require("../../assets/images/background.png");

const Tab = createBottomTabNavigator();

export default function DashboardLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              tabBarStyle: styles.tabBar,
              headerShown: false,
            }}
            initialRouteName="Dashboard"
          >
            <Tab.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                tabBarIcon: ({ color }) => (
                  <Feather name="home" size={24} style={{ color: color }} />
                ),
                tabBarActiveTintColor: "#7B61FF",
              }}
            />
            <Tab.Screen
              name="Calender"
              component={Calender}
              options={{
                tabBarIcon: () => (
                  <Feather
                    name="calendar"
                    size={24}
                    style={{ color: "#5F33E1" }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Task"
              component={Task}
              options={{
                tabBarIcon: () => (
                  <Feather name="book" size={24} style={{ color: "#5F33E1" }} />
                ),
              }}
            />
            <Tab.Screen
              name="Account"
              component={Account}
              options={{
                tabBarIcon: () => (
                  <Feather
                    name="users"
                    size={24}
                    style={{ color: "#5F33E1" }}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#EFE8FF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    height: 60,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
