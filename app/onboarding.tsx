import { ImageBackground, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LogoMark, Wordmark } from "@/components/Logo";

export default function Onboarding() {
  return (
    <View style={{ flex: 1, backgroundColor: "#050506" }}>
      <ImageBackground
        source={require("@/assets/images/onboarding-bg.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(5,5,6,0.15)", "rgba(5,5,6,0.55)", "#050506"]}
          locations={[0, 0.55, 1]}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <View className="flex-1 justify-between px-6 pb-8">
            <View className="mt-4 flex-row items-center gap-2">
              <LogoMark size={26} />
              <Wordmark size={14} />
            </View>

            <View className="gap-8">
              <View>
                <Text className="font-sans-bold text-[34px] leading-[40px] text-foreground">
                  Your finances,{"\n"}engineered for clarity.
                </Text>
                <Text className="mt-3 font-sans text-[15px] leading-6 text-muted">
                  One account for spending, saving, and sending — built with
                  precision and secured to the core.
                </Text>
              </View>

              <Pressable
                onPress={() => router.replace("/(tabs)")}
                className="flex-row items-center justify-center gap-2 rounded-2xl py-4"
                style={{ backgroundColor: "#F5F5F7" }}
              >
                <Text className="font-sans-semibold text-[15px] text-background">
                  Get Started
                </Text>
                <Ionicons name="arrow-forward" size={16} color="#050506" />
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
