import { Text, View } from "react-native";
import type { Currency } from "@/lib/mock-data";

export function CurrencyRow({ currency }: { currency: Currency }) {
  const isPositive = currency.change >= 0;
  return (
    <View
      className="flex-row items-center gap-3 rounded-2xl px-4 py-3.5"
      style={{ backgroundColor: "#111114", borderWidth: 1, borderColor: "#26272B" }}
    >
      <Text style={{ fontSize: 22 }}>{currency.flag}</Text>
      <View className="flex-1">
        <Text className="font-sans-medium text-[14px] text-foreground">{currency.code}</Text>
        <Text className="mt-0.5 font-sans text-[12px] text-muted">{currency.name}</Text>
      </View>
      <View className="items-end">
        <Text className="font-sans-semibold text-[14px] text-foreground">
          {currency.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </Text>
        <Text
          className="mt-0.5 font-sans text-[12px]"
          style={{ color: isPositive ? "#8FE3B0" : "#E38F8F" }}
        >
          {isPositive ? "+" : ""}
          {currency.change}%
        </Text>
      </View>
    </View>
  );
}
