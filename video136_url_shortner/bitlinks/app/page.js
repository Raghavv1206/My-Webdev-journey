"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getThemeClasses } from "@/lib/themeStyles"
import { useTheme } from "@/components/ThemeProvider"

export default function Home() {
      const { theme } = useTheme()
    const styles = getThemeClasses(theme)
  return (
    <main className="min-h-[89vh] flex items-center justify-center">
      <section className="grid md:grid-cols-2 gap-8 max-w-6xl px-8">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center gap-6"
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            <span className={`${styles.text}`}>The best </span>
            <span className={`${styles.textpurple}`}>
              URL shortener </span>
            <span className={`${styles.text}`} >in the market</span>
          </h1>

          <p className={`text-lg ${styles.text}`} >
            No logins. No tracking. Just instant, privacy-first short links.
          </p>

          <div className="flex gap-4">
            <Link href="/shorten">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-bold text-white shadow-lg transition"
              >
                Try Now
              </motion.button>
            </Link>
            <Link href="https://github.com/Raghavv1206" target="_blank">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-lg font-bold text-white shadow-lg transition"
              >
                GitHub
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[300px] md:h-[400px]"
        >
          <Image
            src="/vectorb.png"
            alt="Vector Illustration"
            fill
            className="object-contain"
          />
        </motion.div>
        
      </section>
    </main>
  );
}
