"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const blogUrl = 'https://blog.haerulr2.dev'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`bg-black/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "md:bg-black/80 md:backdrop-blur-md py-3" : "md:bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-2xl tracking-tighter">
            Haerulr2<span className="text-neutral-400">.</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              Home
            </Link>
            <Link
              href="#work"
              className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              About
            </Link>
            <Link
              href={blogUrl}
              className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden md:block">
            <button onClick={() => window.location.href = "#contact"} className="border border-white px-5 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Contact
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto"}}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="container mx-auto px-4 py-8 h-[calc(100vh-56px)]">
            <nav className="flex flex-col space-y-6 h-full">
              <div className="flex-1 flex flex-col items-center">
                <Link
                  href="#features"
                  className="text-neutral-400 hover:text-white py-2 text-xl font-light"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#work"
                  className="text-neutral-400 hover:text-white py-2 text-xl font-light"
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </Link>
                <Link
                  href="#process"
                  className="text-neutral-400 hover:text-white py-2 text-xl font-light"
                  onClick={() => setIsOpen(false)}
                >
                  Process
                </Link>
                <Link
                  href="#pricing"
                  className="text-neutral-400 hover:text-white py-2 text-xl font-light"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
              </div>
              <button
                onClick={() => {
                  window.location.href = "#contact"
                  setIsOpen(false)
                }}
                className="border border-white px-5 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full mt-4"
              >
                Contact
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}
