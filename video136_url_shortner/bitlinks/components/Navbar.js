"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { getThemeClasses } from '@/lib/themeStyles'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const styles = getThemeClasses(theme)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`${styles.card} flex justify-between px-6 h-16 items-center`}
    >
      {/* Logo */}
      <Link href="/" className={`text-2xl font-extrabold ${styles.text}`}>
        BitLinks
      </Link>

      {/* Menu Items */}
      <ul className={`flex gap-6 items-center ${styles.text}`}>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/about">About</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/shorten">Shorten</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/contact">Contact Us</Link>
        </motion.li>

        {/* Buttons Section inside UL so HTML stays valid */}
        <li className="flex gap-3 items-center">
          <Link href="/shorten">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-bold ${styles.button}`}
            >
              Try Now
            </motion.button>
          </Link>

          <Link href="https://github.com/Raghavv1206" target="_blank">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-bold ${styles.button}`}
            >
              GitHub
            </motion.button>
          </Link>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md ${styles.card}`}
          >
            {theme === "light" ? "🌞" : "🌙"}
          </motion.button>
        </li>
      </ul>
    </motion.nav>
  )
}

export default Navbar
