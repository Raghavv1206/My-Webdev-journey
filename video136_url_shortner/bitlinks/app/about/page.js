"use client"
import { motion } from "framer-motion"
import { useTheme } from "@/components/ThemeProvider"
import { getThemeClasses } from "@/lib/themeStyles"

export default function About() {
    const { theme } = useTheme()
    const styles = getThemeClasses(theme)

    return (
        <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mx-auto max-w-4xl my-16 p-8 rounded-lg ${styles.card}`}
        >
            <h1 className={`text-3xl font-bold mb-4 ${styles.text}`}>About BitLinks</h1>
            <p className={`mb-4 ${styles.subtext}`}>
                BitLinks is designed to make URL shortening simple, fast, and secure.
                We believe in providing a service that respects your privacy — no unnecessary tracking,
                no forced logins, and no complicated steps.
            </p>
            <p className={`mb-4 ${styles.subtext}`}>
                Whether you’re a developer looking to share links quickly or just someone
                who needs a clean, short link for social media, BitLinks is here for you.
            </p>
            <p className={styles.subtext}>
                Our mission is to offer a <strong>fast, free, and privacy-first</strong> link shortener that works for everyone.
            </p>
        </motion.main>
    )
}
