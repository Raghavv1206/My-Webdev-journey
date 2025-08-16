"use client"
import React, { useState, useRef, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowdropdown(false);
      }
    }
    if (showdropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showdropdown]);


  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg text-white flex justify-between items-center px-4 md:h-16 sticky top-0 z-50">
      <Link className="logo font-bold text-lg flex justify-center items-center gap-2" href={"/"}>
        <img className="invert grayscale brightness-75 drop-shadow" src="tea.gif" width={44} alt="" />
        <span className="text-xl md:text-base my-3 md:my-0 tracking-wide">Get Me a Chai!</span>
      </Link>

      <div className="relative flex justify-center items-center gap-4">
        {session && <>
          <button
            onClick={() => setShowdropdown(!showdropdown)}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-gray-100 bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center border border-gray-700 transition-all duration-150 shadow"
            type="button"
          >
            Account
            <svg className="w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div ref={dropdownRef} id="dropdown" className={`z-50 ${showdropdown ? "" : "hidden"} absolute left-0 top-12 bg-gray-900 border border-gray-800 rounded-lg shadow-lg w-44 animate-fade-in`}>
            <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-800 rounded transition" onClick={() => setTimeout(() => setShowdropdown(false), 500)}>Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-800 rounded transition" onClick={() => setTimeout(() => setShowdropdown(false), 500)}>Your Page</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setTimeout(() => setShowdropdown(false), 200);
                    signOut({ callbackUrl: "/" });
                  }}
                  className="w-full text-left block px-4 py-2 hover:bg-gray-800 rounded transition"
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </>}

        {session && <button className="text-gray-100 bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2 text-center border border-gray-700 transition-all duration-150 shadow" onClick={() => { signOut({ callbackUrl: "/" }) }}>Logout</button>}
        {!session && <Link href={"/login"}>
          <button className="text-gray-100 bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2 text-center border border-gray-700 transition-all duration-150 shadow">Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar