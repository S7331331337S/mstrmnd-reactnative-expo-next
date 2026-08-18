import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, type ViewProps } from "react-native";
import { heroGradient } from "@/lib/theme";

type Props = ViewProps & {
  children?: React.ReactNode;
};

export function GradientBackground({ children, style, ...rest }: Props) {
  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: "#050506" }]} {...rest}>
      <LinearGradient
        colors={heroGradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={[StyleSheet.absoluteFill, style]}>{children}</View>
    </View>
  );
}
