import { Pressable, Text, View } from "react-native";
import * as Haptics from "expo-haptics";
import type { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";

type ActionButtonProps = {
  label: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  onPress?: () => void;
  variant?: "default" | "primary";
};

export function ActionButton({ label, icon, onPress, variant = "default" }: ActionButtonProps) {
  const isPrimary = variant === "primary";
  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress?.();
      }}
      className="flex-1 flex-row items-center justify-center gap-2 rounded-2xl py-3.5"
      style={{
        backgroundColor: isPrimary ? "#F5F5F7" : "#17181B",
        borderWidth: isPrimary ? 0 : 1,
        borderColor: "#26272B",
      }}
    >
      <Ionicons name={icon} size={16} color={isPrimary ? "#050506" : "#F5F5F7"} />
      <Text
        className="font-sans-medium text-[14px]"
        style={{ color: isPrimary ? "#050506" : "#F5F5F7" }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function CircleIconButton({
  icon,
  onPress,
  size = 48,
}: {
  icon: ComponentProps<typeof Ionicons>["name"];
  onPress?: () => void;
  size?: number;
}) {
  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress?.();
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: "#F5F5F7",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons name={icon} size={size * 0.42} color="#050506" />
    </Pressable>
  );
}
