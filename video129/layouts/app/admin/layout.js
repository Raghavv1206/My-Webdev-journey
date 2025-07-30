import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin: Facebook - connect with your friends and world around you",
  description: "Admin Page : Facebook is a social networking site that makes it easy for you to connect and share with family and friends online.",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <span>Admin Navbar</span>
        {children}
       <span>Admin footer</span>
      </body>
    </html>
  );
}
