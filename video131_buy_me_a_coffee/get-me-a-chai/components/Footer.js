import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900/90 text-white flex items-center justify-center px-4 h-20 border-t border-gray-800 backdrop-blur-md shadow-lg z-20">
      {/* Animated gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 animate-pulse opacity-40"></div>
      <p className="text-center text-sm md:text-base font-light tracking-wide drop-shadow-lg">
        &copy; {currentYear} <span className="font-semibold text-gray-200">Get me A Chai</span> — All rights reserved!
      </p>
    </footer>
  )
}

export default Footer