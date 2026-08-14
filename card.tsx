import { useState } from "react";
import { ScrollView, Text, View, Pressable, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { VirtualCard } from "@/components/VirtualCard";
import { card as mockCard } from "@/lib/mock-data";

const settings: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  description: string;
}[] = [
  { icon: "lock-closed-outline", label: "Change PIN", description: "Update your card PIN code" },
  { icon: "eye-off-outline", label: "Hide card number", description: "Mask number across the app" },
  { icon: "globe-outline", label: "International payments", description: "Enabled for this card" },
  { icon: "document-text-outline", label: "Statements", description: "View monthly statements" },
];

export default function Card() {
  const [frozen, setFrozen] = useState(mockCard.frozen);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#050506" }} edges={["top"]}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="mt-2 font-sans-bold text-[24px] text-foreground">Your Card</Text>
        <Text className="mt-1 font-sans text-[13px] text-muted">
          Manage your virtual MSTRMND card
        </Text>

        <View className="mt-6">
          <VirtualCard card={mockCard} />
        </View>

        <View
          className="mt-5 flex-row items-center justify-between rounded-2xl px-4 py-4"
          style={{ backgroundColor: "#111114", borderWidth: 1, borderColor: "#26272B" }}
        >
          <View className="flex-row items-center gap-3">
            <View
              className="h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: "#17181B" }}
            >
              <Ionicons name="snow-outline" size={17} color="#C9CDD3" />
            </View>
            <View>
              <Text className="font-sans-medium text-[14px] text-foreground">Freeze card</Text>
              <Text className="mt-0.5 font-sans text-[12px] text-muted">
                Temporarily block new payments
              </Text>
            </View>
          </View>
          <Switch
            value={frozen}
            onValueChange={setFrozen}
            trackColor={{ false: "#26272B", true: "#8E9096" }}
            thumbColor="#F5F5F7"
          />
        </View>

        <Text className="mt-8 font-sans-semibold text-[16px] text-foreground">Card Settings</Text>
        <View className="mt-3 gap-2.5">
          {settings.map((item) => (
            <Pressable
              key={item.label}
              className="flex-row items-center gap-3 rounded-2xl px-4 py-3.5 active:opacity-60"
              style={{ backgroundColor: "#111114", borderWidth: 1, borderColor: "#26272B" }}
            >
              <View
                className="h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: "#17181B" }}
              >
                <Ionicons name={item.icon} size={17} color="#C9CDD3" />
              </View>
              <View className="flex-1">
                <Text className="font-sans-medium text-[14px] text-foreground">{item.label}</Text>
                <Text className="mt-0.5 font-sans text-[12px] text-muted">
                  {item.description}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#5C5D62" />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
