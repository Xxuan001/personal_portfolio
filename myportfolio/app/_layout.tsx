// app/_layout.tsx
import { Slot } from "expo-router";
import { View, Text, StyleSheet, ScrollView, useColorScheme } from "react-native";
import { Header } from "../components/Header";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View style={[styles.app, { backgroundColor: isDark ? "#0d0d0d" : "#f8fafc" }]}>
      {/* Sticky Header */}
      <Header />

      {/* Page content with scroll support */}
      <ScrollView
        contentContainerStyle={styles.pageWrap}
        showsVerticalScrollIndicator={false}
      >
        <Slot />
      </ScrollView>

      {/* Footer */}
      <View
        style={[
          styles.footer,
          { borderTopColor: isDark ? "#27272a" : "#e5e7eb" },
        ]}
      >
        <Text style={[styles.footerText, { color: isDark ? "#9ca3af" : "#6b7280" }]}>
          © {new Date().getFullYear()} Your Name · Built with Expo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  pageWrap: {
    flexGrow: 1,
    maxWidth: 1040, // ~max-w-5xl
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  footer: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 1040,
    borderTopWidth: StyleSheet.hairlineWidth,
    padding: 16,
    marginTop: 8,
  },
  footerText: {
    textAlign: "center",
    fontSize: 12,
  },
});
