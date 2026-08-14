import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import { ModalHeader } from "@/components/ModalHeader";
import { account } from "@/lib/mock-data";

const contacts = [
  { id: "c1", name: "Firmansyah A.", handle: "@firman" },
  { id: "c2", name: "Adam S.", handle: "@adam.s" },
  { id: "c3", name: "Priya K.", handle: "@priya.k" },
];

export default function TransferModal() {
  const [selected, setSelected] = useState(contacts[0].id);
  const [amount, setAmount] = useState("");
  const [sent, setSent] = useState(false);

  const numericAmount = Number.parseFloat(amount || "0");
  const canSend = numericAmount > 0 && numericAmount <= account.balance;

  if (sent) {
    const contact = contacts.find((c) => c.id === selected);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#050506" }}>
        <ModalHeader title="Transfer" />
        <View className="flex-1 items-center justify-center px-8">
          <View
            className="h-16 w-16 items-center justify-center rounded-full"
            style={{ backgroundColor: "rgba(143,227,176,0.12)" }}
          >
            <Ionicons name="checkmark" size={28} color="#8FE3B0" />
          </View>
          <Text className="mt-5 font-sans-bold text-[20px] text-foreground">Transfer sent</Text>
          <Text className="mt-2 text-center font-sans text-[14px] text-muted">
            ${numericAmount.toFixed(2)} sent to {contact?.name}
          </Text>
          <Pressable
            onPress={() => router.back()}
            className="mt-8 w-full rounded-2xl py-4"
            style={{ backgroundColor: "#F5F5F7" }}
          >
            <Text className="text-center font-sans-semibold text-[15px] text-background">
              Done
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#050506" }}>
      <ModalHeader title="Transfer Money" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="font-sans-medium text-[13px] text-muted">Send to</Text>
        <View className="mt-2 gap-2">
          {contacts.map((c) => {
            const active = selected === c.id;
            return (
              <Pressable
                key={c.id}
                onPress={() => setSelected(c.id)}
                className="flex-row items-center gap-3 rounded-2xl px-4 py-3"
                style={{
                  backgroundColor: active ? "#17181B" : "#111114",
                  borderWidth: 1,
                  borderColor: active ? "#8E9096" : "#26272B",
                }}
              >
                <View
                  className="h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#26272B" }}
                >
                  <Text className="font-sans-semibold text-[13px] text-foreground">
                    {c.name.charAt(0)}
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className="font-sans-medium text-[14px] text-foreground">{c.name}</Text>
                  <Text className="mt-0.5 font-sans text-[12px] text-muted">{c.handle}</Text>
                </View>
                {active && <Ionicons name="checkmark-circle" size={20} color="#F5F5F7" />}
              </Pressable>
            );
          })}
        </View>

        <Text className="mt-6 font-sans-medium text-[13px] text-muted">Amount</Text>
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
        <Text className="mt-2 font-sans text-[12px] text-muted">
          Available balance: ${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </Text>

        <Pressable
          disabled={!canSend}
          onPress={() => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            setSent(true);
          }}
          className="mt-6 rounded-2xl py-4"
          style={{ backgroundColor: canSend ? "#F5F5F7" : "#26272B" }}
        >
          <Text
            className="text-center font-sans-semibold text-[15px]"
            style={{ color: canSend ? "#050506" : "#5C5D62" }}
          >
            Send Transfer
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
