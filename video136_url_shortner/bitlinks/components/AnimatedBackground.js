"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const { theme } = useTheme()
  const [stars, setStars] = useState([])

  useEffect(() => {
    if (theme === "dark") {
      const generatedStars = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2
      }))
      setStars(generatedStars)
    }
  }, [theme])

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10">
      <AnimatePresence>
        {/* Light Mode */}
        {theme === "light" && (
          <motion.div
            key="sun"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-96 h-96 rounded-full"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-500 blur-2xl opacity-70"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-yellow-200 via-yellow-300 to-yellow-400 blur-xl opacity-80"></div>
              <div className="absolute inset-16 rounded-full bg-yellow-200"></div>
            </motion.div>
          </motion.div>
        )}

        {/* Dark Mode */}
        {theme === "dark" && (
          <motion.div
            key="stars"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-black"
          >
            {stars.map(star => (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-white"
                style={{
                  width: star.size,
                  height: star.size,
                  top: `${star.y}%`,
                  left: `${star.x}%`
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2,
                  delay: star.delay,
                  repeat: Infinity
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
