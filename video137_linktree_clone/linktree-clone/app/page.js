
"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")


  const createTree = () => {

    router.push(`/generate?handle=${text}`)
  }
  return (
    <main className="overflow-x-hidden">
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 pt-40 pb-10">
        <div className="flex justify-center flex-col ml-[10vw] gap-3">
          <p className="text-[#d2e823] font-extrabold text-7xl">Everything you</p>
          <p className="text-[#d2e823] font-extrabold text-7xl">are. In one,</p>
          <p className="text-[#d2e823] font-extrabold text-7xl">simple link in bio.</p>
          <p className="text-white text-xl my-4">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2">
            <input value={text} onChange={(e) => setText(e.target.value)} className="px-2 py-2 focus:outline-green-800 rounded-md bg-white placeholder:font-bold placeholder:text-black" type="text" placeholder="Enter your Handle..." />
            <button onClick={() => createTree()} className="bg-pink-300 rounded-full px-4 py-4 font-semibold cursor-pointer">Claim your Bittree</button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw]">
          <img src="/home.png" alt="homepage image" />

        </div>
      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2 pt-40 pb-10">
        <div className="flex items-center justify-center flex-col ml-[10vw]">
          <img src="/sec2.png" alt="homepage image" />
        </div>
        <div className="flex justify-center flex-col mr-[10vw] gap-3">
          <p className="text-[#502274] font-extrabold text-5xl">Create and</p>
          <p className="text-[#502274] font-extrabold text-5xl">customize your</p>
          <p className="text-[#502274] font-extrabold text-5xl">Linktree in minutes</p>
          <p className="text-[#1e2330] text-xl my-4">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <Link href="/generate"  ><button className="bg-[#502274] text-white rounded-full px-4 py-4 font-semibold w-1/2 cursor-pointer">Get Started</button></Link>
        </div>
      </section>
   <section className="bg-[#502274] min-h-screen flex flex-col justify-between relative">
  {/* Top Left Decoration */}
  <img
    src="/pman.svg"
    className="ml-4 absolute py-4 top-0 left-0 rotate-12 z-0"
    width={500}
    alt="Pattern Man"
  />

  {/* Hero Content */}
  <div className="container flex flex-col items-center text-center z-1 mx-auto py-72">
    <h1 className="text-6xl font-bold text-pink-300">
      Jumpstart your corner of the
    </h1>
    <h1 className="text-6xl font-bold text-blue-400">internet today</h1>

    <div className="input flex gap-2 mt-6">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-2 py-2 focus:outline-green-800 rounded-md bg-white placeholder:font-bold placeholder:text-black"
        type="text"
        placeholder="Enter your Handle..."
      />
      <button
        onClick={() => createTree()}
        className="bg-[#d2e823] rounded-full py-4 font-semibold cursor-pointer px-6"
      >
        Claim your Bittree
      </button>
    </div>
  </div>

  {/* Bottom Right Decoration */}
  <img
    src="/pflower.svg"
    className="absolute top-1/3 left-[60vw] -rotate-12 z-0 overflow-x-hidden"
    width={600}
    alt="Pattern Flower"
  />
  {/* Footer Inside Section */}
  <article className="conatiner bg-white rounded-2xl shadow-lg py-12 pb-0 w-11/12 z-1 mx-auto pl-12">
    <div className="max-w-7xl mx-auto px-4">
      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm justify-center ">
        {/* Company */}
        <div>
          <h3 className="font-bold mb-4 text-xl">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">The Linktree Blog</a></li>
            <li><a href="#" className="hover:underline">Engineering Blog</a></li>
            <li><a href="#" className="hover:underline">Marketplace</a></li>
            <li><a href="#" className="hover:underline">What's New</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Link in Bio</a></li>
            <li><a href="#" className="hover:underline">Social Good</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-bold mb-4 text-xl">Community</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Linktree for Enterprise</a></li>
            <li><a href="#" className="hover:underline">2023 Creator Report</a></li>
            <li><a href="#" className="hover:underline">2022 Creator Report</a></li>
            <li><a href="#" className="hover:underline">Charities</a></li>
            <li><a href="#" className="hover:underline">What's Trending</a></li>
            <li><a href="#" className="hover:underline">Creator Profile Directory</a></li>
            <li><a href="#" className="hover:underline">Explore Templates</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="font-bold mb-4 text-xl">Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Topics</a></li>
            <li><a href="#" className="hover:underline">Getting Started</a></li>
            <li><a href="#" className="hover:underline">Linktree Pro</a></li>
            <li><a href="#" className="hover:underline">Features & How-Tos</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Report a Violation</a></li>
          </ul>
        </div>

        {/* Trust & Legal */}
        <div>
          <h3 className="font-bold mb-4 text-xl">Trust & Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Notice</a></li>
            <li><a href="#" className="hover:underline">Cookie Notice</a></li>
            <li><a href="#" className="hover:underline">Trust Center</a></li>
            <li><a href="#" className="hover:underline">Cookies Preferences</a></li>
            <li><a href="#" className="hover:underline">Transparency Report</a></li>
            <li><a href="#" className="hover:underline">Law Enforcement Access Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-wrap items-center justify-between  gap-4">
        <div className="flex gap-3">
          <button className="px-6 py-2 rounded-md bg-gray-100 hover:bg-gray-200">Log in</button>
          <Link href="/generate"  ><button className="bg-[#d2e823] text-black rounded-full px-4 py-4 font-semibold cursor-pointer">Get started for free</button></Link>
        </div>
        <div className="flex gap-3">
          <img src="dapple.svg" alt="App Store" width={180} />
          <img src="dgoogleplay.svg" alt="Google Play" width={180} />
        </div>
      </div>
    </div>
  </article>

  <footer>
    <div className="text-center text-lg text-white py-8">
      © 2025 Bittree. All rights reserved.
    </div>
  </footer>
</section>

    


    </main>
  );
}
