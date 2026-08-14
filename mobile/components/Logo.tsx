import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { View, Text } from "react-native";

type LogoMarkProps = {
  size?: number;
};

export function LogoMark({ size = 32 }: LogoMarkProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <Defs>
        <LinearGradient id="chrome" x1="0" y1="0" x2="100" y2="100">
          <Stop offset="0" stopColor="#F2F3F5" />
          <Stop offset="0.5" stopColor="#B9BCC2" />
          <Stop offset="1" stopColor="#6C6E73" />
        </LinearGradient>
      </Defs>
      <Path
        d="M50 8 L92 84 L8 84 Z"
        stroke="url(#chrome)"
        strokeWidth={7}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <Path
        d="M50 8 L50 58"
        stroke="url(#chrome)"
        strokeWidth={7}
        strokeLinecap="round"
        fill="none"
      />
      <Path
        d="M50 58 L8 84"
        stroke="url(#chrome)"
        strokeWidth={7}
        strokeLinecap="round"
        fill="none"
      />
      <Path
        d="M50 58 L92 84"
        stroke="url(#chrome)"
        strokeWidth={7}
        strokeLinecap="round"
        fill="none"
      />
    </Svg>
  );
}

type WordmarkProps = {
  size?: number;
  className?: string;
};

export function Wordmark({ size = 16, className }: WordmarkProps) {
  return (
    <Text
      className={className}
      style={{
        fontSize: size,
        letterSpacing: size * 0.28,
        color: "#F5F5F7",
      }}
    >
      MSTRMND
    </Text>
  );
}

export function LogoLockup({ markSize = 22, textSize = 14 }: { markSize?: number; textSize?: number }) {
  return (
    <View className="flex-row items-center gap-2">
      <LogoMark size={markSize} />
      <Wordmark size={textSize} />
    </View>
  );
}
