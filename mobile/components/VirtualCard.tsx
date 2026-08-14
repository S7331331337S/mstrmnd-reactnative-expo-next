import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LogoMark } from "@/components/Logo";
import type { card as CardType } from "@/lib/mock-data";

export function VirtualCard({ card }: { card: typeof CardType }) {
  const last4 = card.number.split(" ").at(-1);
  return (
    <View
      className="aspect-[1.58] w-full overflow-hidden rounded-[24px] p-6"
      style={{ borderWidth: 1, borderColor: "#2C2D31" }}
    >
      <LinearGradient
        colors={["#23242A", "#0C0C0E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <View className="flex-1 justify-between">
        <View className="flex-row items-center justify-between">
          <LogoMark size={26} />
          <Text className="font-sans-bold text-[15px] italic text-foreground">
            {card.network}
          </Text>
        </View>

        <View>
          <Text className="font-mono text-[18px] tracking-[3px] text-foreground">
            •••• •••• •••• {last4}
          </Text>
          <View className="mt-4 flex-row items-center justify-between">
            <View>
              <Text className="font-sans text-[10px] uppercase tracking-wide text-muted">
                Card Holder
              </Text>
              <Text className="mt-0.5 font-sans-medium text-[13px] text-foreground">
                {card.holder}
              </Text>
            </View>
            <View>
              <Text className="font-sans text-[10px] uppercase tracking-wide text-muted">
                Expires
              </Text>
              <Text className="mt-0.5 font-sans-medium text-[13px] text-foreground">
                {card.expiry}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
