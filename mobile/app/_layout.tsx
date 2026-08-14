import "../global.css";
import { useEffect, useCallback } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { Platform, StyleSheet, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { SpaceMono_400Regular, SpaceMono_700Bold } from "@expo-google-fonts/space-mono";

// NativeWind web expects class-based dark mode when color scheme is set manually.
if (Platform.OS === "web") {
  // @ts-expect-error NativeWind StyleSheet flag
  StyleSheet.setFlag?.("darkMode", "class");
  if (typeof document !== "undefined") {
    document.documentElement.classList.add("dark");
  }
}

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    SpaceMono_400Regular,
    SpaceMono_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (fontsLoaded) {
      onLayoutRootView();
    }
  }, [fontsLoaded, onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: "#050506" }}>
          <StatusBar style="light" />
          <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#050506" } }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="onboarding" />
            <Stack.Screen
              name="request"
              options={{ presentation: "modal" }}
            />
            <Stack.Screen
              name="transfer"
              options={{ presentation: "modal" }}
            />
            <Stack.Screen
              name="transaction/[id]"
              options={{ presentation: "modal" }}
            />
          </Stack>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
