import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

export function Chip({
  label,
  icon,
  active,
  onPress,
}: {
  label: string;
  icon?: ComponentProps<typeof Ionicons>["name"];
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center gap-1.5 rounded-full px-3.5 py-2"
      style={{
        backgroundColor: active ? "#F5F5F7" : "#111114",
        borderWidth: 1,
        borderColor: active ? "#F5F5F7" : "#26272B",
      }}
    >
      {icon && <Ionicons name={icon} size={13} color={active ? "#050506" : "#8B8D93"} />}
      <Text
        className="font-sans-medium text-[13px]"
        style={{ color: active ? "#050506" : "#8B8D93" }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
