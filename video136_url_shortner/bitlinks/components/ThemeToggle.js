"use client"
import { useTheme } from "./ThemeProvider"
import { motion } from "framer-motion"

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed top-4 right-4 p-2 bg-white/20 rounded-full shadow-lg backdrop-blur-md"
        >
            {theme === "light" ? "🌞" : "🌙"}
        </motion.button>
    )
}
