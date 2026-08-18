import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { formatMoney } from "@/components/BalanceCard";
import type { Transaction } from "@/lib/mock-data";
import { Link } from "expo-router";

const categoryIcon: Record<Transaction["category"], ComponentProps<typeof Ionicons>["name"]> = {
  transfer: "arrow-up-outline",
  receive: "arrow-down-outline",
  subscription: "repeat-outline",
  shopping: "bag-outline",
  salary: "briefcase-outline",
};

export function TransactionRow({ transaction }: { transaction: Transaction }) {
  const isIn = transaction.type === "in";
  return (
    <Link href={{ pathname: "/transaction/[id]", params: { id: transaction.id } }} asChild>
      <Pressable className="flex-row items-center gap-3 py-3 active:opacity-60">
        <View
          className="h-11 w-11 items-center justify-center rounded-full"
          style={{ backgroundColor: "#17181B", borderWidth: 1, borderColor: "#26272B" }}
        >
          <Ionicons name={categoryIcon[transaction.category]} size={17} color="#C9CDD3" />
        </View>
        <View className="flex-1">
          <Text className="font-sans-medium text-[14px] text-foreground">{transaction.name}</Text>
          <Text className="mt-0.5 font-sans text-[12px] text-muted">
            {transaction.subtitle} · {transaction.time}
          </Text>
        </View>
        <Text
          className="font-sans-semibold text-[14px]"
          style={{ color: isIn ? "#8FE3B0" : "#F5F5F7" }}
        >
          {isIn ? "+" : ""}
          {formatMoney(transaction.amount)}
        </Text>
      </Pressable>
    </Link>
  );
}

export function TransactionSectionHeader({ label }: { label: string }) {
  return (
    <Text className="mb-1 mt-4 font-sans-medium text-[12px] uppercase tracking-wide text-muted">
      {label}
    </Text>
  );
}
