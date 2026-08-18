import { ScrollView, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LogoMark } from "@/components/Logo";

const agents = [
  { name: "Maestro", role: "Orchestrator", status: "ACTIVE", icon: "sparkles-outline" as const },
  { name: "Cipher", role: "Engineering", status: "READY", icon: "code-slash-outline" as const },
  { name: "Nova", role: "Research", status: "READY", icon: "search-outline" as const },
];

const activity = [
  { title: "Interface system updated", meta: "Maestro · 2m", icon: "layers-outline" as const },
  { title: "Repository context indexed", meta: "Cipher · 18m", icon: "git-branch-outline" as const },
  { title: "Market brief synthesized", meta: "Nova · 1h", icon: "pulse-outline" as const },
];

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#050506" }} edges={["top"]}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        <View className="mt-2 flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="h-10 w-10 items-center justify-center rounded-full border border-[#26272B] bg-[#111214]">
              <LogoMark size={18} />
            </View>
            <View>
              <Text className="font-sans text-[11px] uppercase tracking-[2px] text-[#71737A]">MSTRMND</Text>
              <Text className="font-sans-semibold text-[15px] text-[#F5F5F7]">Command</Text>
            </View>
          </View>
          <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-[#26272B] bg-[#111214]">
            <Ionicons name="notifications-outline" size={18} color="#C9CDD3" />
          </Pressable>
        </View>

        <View className="mt-9">
          <Text className="font-sans text-[11px] uppercase tracking-[2.4px] text-[#686A70]">Operator intelligence</Text>
          <Text className="mt-3 font-sans-semibold text-[32px] leading-[36px] tracking-[-1.2px] text-[#F5F5F7]">
            What are we building?
          </Text>
          <Text className="mt-3 max-w-[330px] font-sans text-[14px] leading-[21px] text-[#8E9097]">
            Direct the alliance. MSTRMND coordinates models, agents, memory and tools around the objective.
          </Text>
        </View>

        <Pressable className="mt-6 rounded-[22px] border border-[#2A2B2F] bg-[#111214] p-4">
          <View className="flex-row items-center gap-3">
            <View className="h-10 w-10 items-center justify-center rounded-full bg-[#F2F0E8]">
              <Ionicons name="arrow-up" size={18} color="#09090A" />
            </View>
            <View className="flex-1">
              <Text className="font-sans-medium text-[15px] text-[#EDEEF0]">Give MSTRMND an objective</Text>
              <Text className="mt-1 font-sans text-[12px] text-[#707278]">Build, research, analyze, coordinate…</Text>
            </View>
            <Ionicons name="mic-outline" size={20} color="#8B8D93" />
          </View>
        </Pressable>

        <View className="mt-8 flex-row items-center justify-between">
          <Text className="font-sans-semibold text-[16px] text-[#F5F5F7]">Alliance</Text>
          <Text className="font-sans text-[11px] uppercase tracking-[1.5px] text-[#6F7177]">3 online</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-5 mt-4" contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}>
          {agents.map((agent) => (
            <Pressable key={agent.name} className="w-[154px] rounded-[20px] border border-[#242529] bg-[#101113] p-4">
              <View className="flex-row items-center justify-between">
                <View className="h-9 w-9 items-center justify-center rounded-full border border-[#303136] bg-[#17181B]">
                  <Ionicons name={agent.icon} size={17} color="#E7E7E9" />
                </View>
                <View className="h-2 w-2 rounded-full bg-[#D7D5CB]" />
              </View>
              <Text className="mt-5 font-sans-semibold text-[15px] text-[#F1F1F3]">{agent.name}</Text>
              <Text className="mt-1 font-sans text-[12px] text-[#74767C]">{agent.role}</Text>
              <Text className="mt-4 font-sans-medium text-[9px] tracking-[1.6px] text-[#96989D]">{agent.status}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View className="mt-9 flex-row items-center justify-between">
          <Text className="font-sans-semibold text-[16px] text-[#F5F5F7]">Live context</Text>
          <Pressable><Text className="font-sans-medium text-[12px] text-[#7F8187]">View memory</Text></Pressable>
        </View>

        <View className="mt-3 overflow-hidden rounded-[20px] border border-[#242529] bg-[#0F1012]">
          {activity.map((item, index) => (
            <View key={item.title} className={`flex-row items-center gap-3 p-4 ${index !== activity.length - 1 ? "border-b border-[#202125]" : ""}`}>
              <View className="h-9 w-9 items-center justify-center rounded-full bg-[#18191C]">
                <Ionicons name={item.icon} size={16} color="#BFC1C6" />
              </View>
              <View className="flex-1">
                <Text className="font-sans-medium text-[13px] text-[#E4E5E7]">{item.title}</Text>
                <Text className="mt-1 font-sans text-[11px] text-[#66686E]">{item.meta}</Text>
              </View>
              <Ionicons name="chevron-forward" size={15} color="#55575D" />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
