"use client"
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/ThemeProvider'
import { getThemeClasses } from '@/lib/themeStyles'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const { theme } = useTheme()
    const styles = getThemeClasses(theme)

    const generate = () => {
        fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url, shorturl })
        })
        .then((res) => res.json())
        .then((result) => {
            setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            seturl("")
            setshorturl("")
            alert(result.message)
        })
        .catch(console.error)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mx-auto max-w-lg my-16 p-8 rounded-lg flex flex-col gap-4 ${styles.card}`}
        >
            <h1 className={`font-bold text-3xl text-center ${styles.text}`}>Generate Your Short Links</h1>
            <input
                type="text"
                value={url}
                placeholder="Enter your URL"
                className={`px-4 py-2 rounded-md focus:outline-purple-600 ${styles.input}`}
                onChange={(e) => seturl(e.target.value)}
            />
            <input
                type="text"
                value={shorturl}
                placeholder="Enter your preferred short text"
                className={`px-4 py-2 rounded-md focus:outline-purple-600 ${styles.input}`}
                onChange={(e) => setshorturl(e.target.value)}
            />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generate}
                className={`rounded-lg p-3 font-bold shadow-lg ${styles.button}`}
            >
                Generate
            </motion.button>

            {generated && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
                    <span className={`font-bold ${styles.text}`}>Your Link: </span>
                    <Link target="_blank" href={generated} className={styles.link}>
                        {generated}
                    </Link>
                </motion.div>
            )}
        </motion.div>
    )
}

export default Shorten
