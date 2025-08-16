"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/components/ThemeProvider"
import { getThemeClasses } from "@/lib/themeStyles"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const { theme } = useTheme()
    const styles = getThemeClasses(theme)

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you, ${name}! Your message has been received.`)
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mx-auto max-w-lg my-16 p-8 rounded-lg mb-0 ${styles.card}`}
        >
            <h1 className={`text-3xl font-bold mb-4 ${styles.text}`}>Contact Us</h1>
            <p className={`mb-6 ${styles.subtext}`}>
                Have questions or feedback? We'd love to hear from you!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`px-4 py-2 rounded-md focus:outline-purple-600 ${styles.input}`}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`px-4 py-2 rounded-md focus:outline-purple-600 ${styles.input}`}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`px-4 py-2 rounded-md focus:outline-purple-600 ${styles.input}`}
                    rows="5"
                    required
                ></textarea>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className={`font-bold py-2 px-4 rounded-lg shadow-lg ${styles.button}`}
                >
                    Send Message
                </motion.button>
            </form>
        </motion.main>
    )
}
