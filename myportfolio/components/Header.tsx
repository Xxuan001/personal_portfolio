import { Link, usePathname } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const links = [
  { label: "Portfolio", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const; // <-- make href literals readonly

type LinkType = (typeof links)[number]['href']; // "/" | "/about" | "/projects" | "/contact"

export function Header() {
  const pathname = usePathname();

  return (
    <View style={styles.wrap}>
      <Text style={styles.brand}>My Portfolio</Text>
      <View style={styles.nav}>
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            //<Link key={l.href} href={l.href as LinkType}>
              <Text style={[styles.link, active && styles.linkActive]}>
                {l.label}b
              </Text>
            //</Link>
          );
        })}
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  wrap: {
    alignSelf: "center",
    maxWidth: 1040,
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e5e7eb",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  brand: {
    fontSize: 18,
    fontWeight: "700",
  },
  nav: {
    flexDirection: "row",
    gap: 18,
  },
  link: {
    fontSize: 14,
    color: "#374151",
  },
  linkActive: {
    color: "#2563eb", // blue-600
    textDecorationLine: "underline",
    textDecorationColor: "#2563eb",
  },
});
