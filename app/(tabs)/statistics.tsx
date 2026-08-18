import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SpendingChart } from "@/components/SpendingChart";
import { CurrencyRow } from "@/components/CurrencyRow";
import { currencies, spendingWeekly } from "@/lib/mock-data";

export default function Statistics() {
  const totalSpent = spendingWeekly.reduce((sum, d) => sum + d.value, 0);
  const totalBalance = currencies.reduce((sum, c) => sum + c.balance, 0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#050506" }} edges={["top"]}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="mt-2 font-sans-bold text-[24px] text-foreground">Statistics</Text>
        <Text className="mt-1 font-sans text-[13px] text-muted">
          Track your spending and multi-currency balances
        </Text>

        <View className="mt-6 flex-row gap-3">
          <View
            className="flex-1 rounded-2xl p-4"
            style={{ backgroundColor: "#111114", borderWidth: 1, borderColor: "#26272B" }}
          >
            <Text className="font-sans text-[12px] text-muted">Spent this week</Text>
            <Text className="mt-1 font-sans-bold text-[20px] text-foreground">
              ${totalSpent.toLocaleString()}
            </Text>
          </View>
          <View
            className="flex-1 rounded-2xl p-4"
            style={{ backgroundColor: "#111114", borderWidth: 1, borderColor: "#26272B" }}
          >
            <Text className="font-sans text-[12px] text-muted">Total across currencies</Text>
            <Text className="mt-1 font-sans-bold text-[20px] text-foreground">
              ${totalBalance.toLocaleString()}
            </Text>
          </View>
        </View>

        <View className="mt-5">
          <SpendingChart data={spendingWeekly} />
        </View>

        <Text className="mt-8 font-sans-semibold text-[16px] text-foreground">Currencies</Text>
        <View className="mt-3 gap-3">
          {currencies.map((c) => (
            <CurrencyRow key={c.code} currency={c} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
