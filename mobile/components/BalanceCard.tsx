import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export function formatMoney(amount: number) {
  const sign = amount < 0 ? "-" : "";
  const abs = Math.abs(amount);
  return `${sign}$${abs.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function BalanceCard({
  balance,
  currencyLabel,
  change,
}: {
  balance: number;
  currencyLabel: string;
  change: number;
}) {
  const isPositive = change >= 0;
  return (
    <View
      className="overflow-hidden rounded-[28px] px-6 py-7"
      style={{ borderWidth: 1, borderColor: "#26272B" }}
    >
      <LinearGradient
        colors={["#15161A", "#0A0A0C"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <View className="flex-row items-center justify-between">
        <Text className="font-sans-medium text-[13px] tracking-wide text-muted">
          Total Balance
        </Text>
        <View
          className="flex-row items-center gap-1 rounded-full px-2.5 py-1"
          style={{ backgroundColor: "rgba(143,227,176,0.12)" }}
        >
          <Ionicons
            name={isPositive ? "trending-up" : "trending-down"}
            size={12}
            color={isPositive ? "#8FE3B0" : "#E38F8F"}
          />
          <Text
            className="font-sans-medium text-[11px]"
            style={{ color: isPositive ? "#8FE3B0" : "#E38F8F" }}
          >
            {isPositive ? "+" : ""}
            {change}%
          </Text>
        </View>
      </View>

      <Text className="mt-3 font-sans-bold text-[40px] text-foreground">
        {formatMoney(balance)}
      </Text>
      <Text className="mt-1 font-sans text-[13px] text-muted">{currencyLabel}</Text>
    </View>
  );
}
