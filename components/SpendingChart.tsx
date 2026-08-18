import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function SpendingChart({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <View
      className="rounded-[24px] p-5"
      style={{ backgroundColor: "#111114", borderWidth: 1, borderColor: "#26272B" }}
    >
      <Text className="font-sans-medium text-[13px] text-muted">Weekly Spending</Text>
      <View className="mt-5 flex-row items-end justify-between" style={{ height: 140 }}>
        {data.map((item) => {
          const height = Math.max(10, (item.value / max) * 130);
          const isPeak = item.value === max;
          return (
            <View key={item.label} className="items-center" style={{ width: 32 }}>
              <View
                style={{
                  height,
                  width: 14,
                  borderRadius: 7,
                  overflow: "hidden",
                  backgroundColor: "#26272B",
                }}
              >
                <LinearGradient
                  colors={isPeak ? ["#F2F3F5", "#8E9096"] : ["#6C6E73", "#3A3B3F"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={{ flex: 1 }}
                />
              </View>
              <Text className="mt-2 font-sans text-[11px] text-muted">{item.label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
