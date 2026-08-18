import { ScrollView, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LogoMark } from "@/components/Logo";
import { BalanceCard } from "@/components/BalanceCard";
import { ActionButton } from "@/components/ActionButton";
import { TransactionRow, TransactionSectionHeader } from "@/components/TransactionRow";
import { account, transactions, user } from "@/lib/mock-data";

export default function Home() {
  const grouped = transactions.reduce<Record<string, typeof transactions>>((acc, t) => {
    acc[t.date] = acc[t.date] ? [...acc[t.date], t] : [t];
    return acc;
  }, {});

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#050506" }} edges={["top"]}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mt-2 flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View
              className="h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: "#17181B", borderWidth: 1, borderColor: "#26272B" }}
            >
              <LogoMark size={18} />
            </View>
            <View>
              <Text className="font-sans text-[12px] text-muted">Welcome back</Text>
              <Text className="font-sans-semibold text-[15px] text-foreground">{user.name}</Text>
            </View>
          </View>
          <Pressable
            className="h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: "#17181B", borderWidth: 1, borderColor: "#26272B" }}
          >
            <Ionicons name="notifications-outline" size={18} color="#C9CDD3" />
          </Pressable>
        </View>

        <View className="mt-6">
          <BalanceCard balance={account.balance} currencyLabel={account.currencyLabel} change={2.4} />
        </View>

        <View className="mt-4 flex-row gap-3">
          <ActionButton
            label="Request"
            icon="arrow-down-outline"
            onPress={() => router.push("/request")}
          />
          <ActionButton
            label="Transfer"
            icon="arrow-up-outline"
            variant="primary"
            onPress={() => router.push("/transfer")}
          />
        </View>

        <View className="mt-8 flex-row items-center justify-between">
          <Text className="font-sans-semibold text-[16px] text-foreground">Recent Activity</Text>
          <Pressable onPress={() => router.push("/(tabs)/activity")}>
            <Text className="font-sans-medium text-[13px] text-muted">See all</Text>
          </Pressable>
        </View>

        {Object.entries(grouped).map(([date, items]) => (
          <View key={date}>
            <TransactionSectionHeader label={date} />
            {items.map((t) => (
              <TransactionRow key={t.id} transaction={t} />
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
