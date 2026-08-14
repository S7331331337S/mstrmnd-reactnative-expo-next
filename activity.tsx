import { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Chip } from "@/components/Chip";
import { TransactionRow, TransactionSectionHeader } from "@/components/TransactionRow";
import { transactions } from "@/lib/mock-data";

type Filter = "all" | "in" | "out";

export default function Activity() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return transactions;
    return transactions.filter((t) => t.type === filter);
  }, [filter]);

  const sections = useMemo(() => {
    const grouped = filtered.reduce<Record<string, typeof transactions>>((acc, t) => {
      acc[t.date] = acc[t.date] ? [...acc[t.date], t] : [t];
      return acc;
    }, {});
    return Object.entries(grouped);
  }, [filtered]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#050506" }} edges={["top"]}>
      <View className="px-5">
        <Text className="mt-2 font-sans-bold text-[24px] text-foreground">Activity</Text>
        <View className="mt-5 flex-row gap-2">
          <Chip label="All" active={filter === "all"} onPress={() => setFilter("all")} />
          <Chip
            label="Received"
            icon="arrow-down-outline"
            active={filter === "in"}
            onPress={() => setFilter("in")}
          />
          <Chip
            label="Sent"
            icon="arrow-up-outline"
            active={filter === "out"}
            onPress={() => setFilter("out")}
          />
        </View>
      </View>

      <FlatList
        data={sections}
        keyExtractor={([date]) => date}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120, paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: [date, items] }) => (
          <View>
            <TransactionSectionHeader label={date} />
            {items.map((t) => (
              <TransactionRow key={t.id} transaction={t} />
            ))}
          </View>
        )}
        ListEmptyComponent={
          <View className="mt-16 items-center gap-2">
            <Ionicons name="receipt-outline" size={28} color="#5C5D62" />
            <Text className="font-sans text-[13px] text-muted">No transactions found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
