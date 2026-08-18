import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 9, marginTop: 2 },
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          backgroundColor: "transparent",
          height: 82,
          paddingTop: 10,
        },
        tabBarBackground: () => (
          <BlurView intensity={48} tint="dark" style={[StyleSheet.absoluteFill, { borderTopWidth: 1, borderTopColor: "#242529" }]} />
        ),
        tabBarActiveTintColor: "#F2F0E8",
        tabBarInactiveTintColor: "#5F6167",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Command", tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "sparkles" : "sparkles-outline"} size={21} color={color} /> }} />
      <Tabs.Screen name="statistics" options={{ title: "Memory", tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "layers" : "layers-outline"} size={21} color={color} /> }} />
      <Tabs.Screen name="activity" options={{ title: "Activity", tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "pulse" : "pulse-outline"} size={21} color={color} /> }} />
      <Tabs.Screen name="card" options={{ title: "Identity", tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "finger-print" : "finger-print-outline"} size={21} color={color} /> }} />
    </Tabs>
  );
}
