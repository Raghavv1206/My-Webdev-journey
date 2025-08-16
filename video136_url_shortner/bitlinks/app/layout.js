import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitlinks - Your Trusted URL Shortener",
  description: "Bitlinks helps you shorten URLs easily and efficiently",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen transition-colors duration-1000`}
      >
        <ThemeProvider>
          {/* Animated sky background */}
          <div className="absolute inset-0 -z-10">
            <AnimatedBackground />
          </div>

          {/* Navigation with theme toggle */}
          <Navbar />

          {/* Main content above background */}
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
