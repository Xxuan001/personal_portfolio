// app/_layout.tsx
import { Slot } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "../components/Header";

export default function RootLayout() {
  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.pageWrap}>
        <Slot />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} Your Name</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#f8fafc", // light gray (bg-gray-50)
  },
  pageWrap: {
    flex: 1,
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
    borderTopColor: "#e5e7eb",
    padding: 16,
    marginTop: 8,
  },
  footerText: {
    textAlign: "center",
    color: "#6b7280",
  },
});





// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   if (!loaded) {
//     // Async font loading only occurs in development.
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }
