import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QRCode from "react-native-qrcode-svg";
import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import { ModalHeader } from "@/components/ModalHeader";
import { user } from "@/lib/mock-data";

export default function RequestModal() {
  const [amount, setAmount] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#050506" }}>
      <ModalHeader title="Request Money" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center rounded-[28px] py-8" style={{ backgroundColor: "#111114", borderWidth: 1, borderColor: "#26272B" }}>
          <View className="rounded-2xl bg-foreground p-4">
            <QRCode
              value={`mstrmnd://pay/${user.handle}?amount=${amount || "0"}`}
              size={168}
              color="#050506"
              backgroundColor="#F5F5F7"
            />
          </View>
          <Text className="mt-5 font-sans-semibold text-[15px] text-foreground">{user.name}</Text>
          <Text className="mt-1 font-sans text-[13px] text-muted">{user.handle}</Text>
        </View>

        <Text className="mt-6 font-sans-medium text-[13px] text-muted">Amount (optional)</Text>
        <View
          className="mt-2 flex-row items-center rounded-2xl px-4"
          style={{ backgroundColor: "#111114", borderWidth: 1, borderColor: "#26272B" }}
        >
          <Text className="font-sans-semibold text-[20px] text-muted">$</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder="0.00"
            placeholderTextColor="#5C5D62"
            keyboardType="decimal-pad"
            className="flex-1 py-4 pl-2 font-sans-semibold text-[20px] text-foreground"
          />
        </View>

        <Pressable
          onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)}
          className="mt-6 flex-row items-center justify-center gap-2 rounded-2xl py-4"
          style={{ backgroundColor: "#F5F5F7" }}
        >
          <Ionicons name="share-outline" size={16} color="#050506" />
          <Text className="font-sans-semibold text-[15px] text-background">Share Request</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
