import * as React from "react";
import { View, Text } from "react-native";

export default function Screen() {
  return (
    <View className="flex-1 justify-center items-center p-6 bg-background gap-5">
      <Text className="text-foreground text-lg">Toggle theme in header</Text>
      <View className="h-px bg-muted w-full" />
      <Text className="text-muted-foreground text-center">
        Text and border color should change based on theme
      </Text>
    </View>
  );
}
