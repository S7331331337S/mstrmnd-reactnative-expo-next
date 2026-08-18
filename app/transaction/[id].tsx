import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View, Pressable, Share } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { GradientBackground } from "@/components/GradientBackground";
import { ModalHeader } from "@/components/ModalHeader";
import { formatMoney } from "@/components/BalanceCard";
import { transactions } from "@/lib/mock-data";
import { colors } from "@/lib/theme";

export default function TransactionDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const tx = transactions.find((t) => t.id === id);

  if (!tx) {
    return (
      <GradientBackground>
        <SafeAreaView className="flex-1 items-center justify-center">
          <Text className="text-white/60 font-sans">Transaction not found</Text>
        </SafeAreaView>
      </GradientBackground>
    );
  }

  const isIn = tx.type === "in";
  const amountLabel = `${isIn ? "+" : ""}${formatMoney(tx.amount)}`;

  const rows: { label: string; value: string }[] = [
    { label: "Status", value: "Completed" },
    { label: "Date", value: `${tx.date} · ${tx.time}` },
    { label: "Category", value: tx.category.charAt(0).toUpperCase() + tx.category.slice(1) },
    { label: "Reference", value: `MSTR-${tx.id.toUpperCase()}` },
  ];

  return (
    <GradientBackground>
      <SafeAreaView className="flex-1">
        <ModalHeader title="Transaction" />

        <ScrollView className="flex-1 px-6" contentContainerClassName="pb-10">
          <View className="items-center py-8">
            <View
              className="h-16 w-16 items-center justify-center rounded-full mb-5"
              style={{
                backgroundColor: isIn ? "rgba(143,227,176,0.12)" : "rgba(255,255,255,0.06)",
                borderWidth: 1,
                borderColor: isIn ? "rgba(143,227,176,0.3)" : "rgba(255,255,255,0.1)",
              }}
            >
              <Ionicons
                name={isIn ? "arrow-down-outline" : "arrow-up-outline"}
                size={26}
                color={isIn ? colors.positive : colors.chromeLight}
              />
            </View>
            <Text className="text-white text-3xl font-sans font-semibold tracking-tight">
              {amountLabel}
            </Text>
            <Text className="text-white/50 font-sans text-sm mt-2">
              {tx.subtitle} {tx.name}
            </Text>
          </View>

          <View
            className="rounded-3xl p-1 mb-6"
            style={{ backgroundColor: "rgba(255,255,255,0.03)", borderWidth: 1, borderColor: "rgba(255,255,255,0.07)" }}
          >
            {rows.map((row, index) => (
              <View
                key={row.label}
                className="flex-row items-center justify-between px-5 py-4"
                style={{
                  borderTopWidth: index === 0 ? 0 : 1,
                  borderTopColor: "rgba(255,255,255,0.06)",
                }}
              >
                <Text className="text-white/45 font-sans text-sm">{row.label}</Text>
                <Text
                  className="text-white font-sans text-sm font-medium"
                  style={row.label === "Status" ? { color: colors.positive } : undefined}
                >
                  {row.value}
                </Text>
              </View>
            ))}
          </View>

          <Pressable
            onPress={() =>
              Share.share({
                message: `${tx.subtitle} ${tx.name} ${amountLabel} · ${tx.date} ${tx.time}`,
              })
            }
            className="flex-row items-center justify-center gap-2 rounded-2xl py-4"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", borderWidth: 1, borderColor: "rgba(255,255,255,0.1)" }}
          >
            <Ionicons name="share-outline" size={16} color="#FFFFFF" />
            <Text className="text-white font-sans text-sm font-medium">Share receipt</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}
