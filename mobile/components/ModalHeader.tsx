import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export function ModalHeader({ title }: { title: string }) {
  return (
    <View className="flex-row items-center justify-between px-5 pb-4 pt-2">
      <Text className="font-sans-bold text-[20px] text-foreground">{title}</Text>
      <Pressable
        onPress={() => router.back()}
        className="h-9 w-9 items-center justify-center rounded-full"
        style={{ backgroundColor: "#17181B", borderWidth: 1, borderColor: "#26272B" }}
      >
        <Ionicons name="close" size={16} color="#C9CDD3" />
      </Pressable>
    </View>
  );
}
