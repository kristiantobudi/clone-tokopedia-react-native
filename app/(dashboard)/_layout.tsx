import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import Dashboard from "./dashboard";
import Calender from "./calender";
import Task from "./task";
import Account from "./account";
import { router } from "expo-router";
import CreatePage from "./task/createTask";

const image = require("../../assets/images/background.png");

const Tab = createBottomTabNavigator();

export default function DashboardLayout() {
  const createTask = () => {
    router.push("/(dashboard)/createTask");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Tab.Navigator
              screenOptions={{
                tabBarInactiveTintColor: "#5F33E1",
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
                    <Ionicons name="home" size={30} style={{ color: color }} />
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
                      size={30}
                      style={{ color: "#5F33E1" }}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Create Task"
                component={CreatePage}
                options={{
                  tabBarButton: (props) => (
                    <TouchableOpacity
                      style={styles.floatingButton}
                      onPress={props.onPress}
                    >
                      <AntDesign name="plus" size={30} color="white" />
                    </TouchableOpacity>
                  ),
                  tabBarStyle: { display: "none" },
                }}
              />
              <Tab.Screen
                name="Task"
                component={Task}
                options={{
                  tabBarIcon: () => (
                    <Feather
                      name="book"
                      size={30}
                      style={{ color: "#5F33E1" }}
                    />
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
                      size={30}
                      style={{ color: "#5F33E1" }}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#5F33E1",
    height: 60,
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  floatingButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#7B61FF",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
