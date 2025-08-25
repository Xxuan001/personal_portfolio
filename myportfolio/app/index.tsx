import { Text, View } from "react-native";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d0d0d] text-gray-800 dark:text-gray-100 font-sans">
      {/* Header */}
      <header className="max-w-5xl mx-auto p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-tight">My Portfolio</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 bg-white dark:bg-[#111] shadow rounded-lg mt-10">
        {/* Left */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-extrabold leading-tight">Hey, I’m [Your Name]!</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a [your role here]. I’ve been [short description of experience] and
            <a href="/blog" className="text-blue-600 dark:text-blue-400 underline ml-1">
              writing on this blog
            </a>{" "}for a while!
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Everything on this site is written by me.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#about"
              className="flex items-center gap-2 px-5 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              📁 About Me
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              target="_blank"
              rel="noreferrer"
            >
              📩 Newsletter
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center">
          <img
            src="/your-photo.png"
            alt="Your photo or logo"
            className="w-64 h-64 object-cover rounded-full shadow-md"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6 space-y-24 mt-16">
        <section id="about" className="bg-white dark:bg-[#111] shadow rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            This is where you can write a short introduction about yourself.
          </p>
        </section>

        <section id="projects" className="bg-white dark:bg-[#111] shadow rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <ul className="space-y-4">
            <li className="p-5 border rounded-lg dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">Project 1</li>
            <li className="p-5 border rounded-lg dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">Project 2</li>
            <li className="p-5 border rounded-lg dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">Project 3</li>
          </ul>
        </section>

        <section id="contact" className="bg-white dark:bg-[#111] shadow rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Email: youremail@example.com</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto p-6 border-t border-gray-200 dark:border-gray-800 text-sm text-center text-gray-600 dark:text-gray-400 mt-16">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
}









// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
