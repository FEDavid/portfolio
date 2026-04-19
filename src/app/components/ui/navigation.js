'use client'

// Hooks
import { useEffect, useState } from "react"

// Next
import Link from "next/link"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const base = "flex gap-6 justify-between py-6 px-7 w-full fixed z-[1000]"
  const scrolledStyles = "backdrop-blur-lg bg-[var(--theme-darkest)]/50 border-b border-white/10"

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#content" },
    { name: "Posts", href: "#posts" },
    { name: "Contact", href: "#footer" },
  ]

  const separator = <span className="text-[var(--theme-highlight)]">/</span>

  return (
    <nav className={`${base} ${scrolled ? scrolledStyles : ""} transition-all duration-300`}>
      
      {/* Logo */}
      <p className="font-funnel text-xl whitespace-nowrap">
        david-mould.<span className="font-[1000] text-[var(--theme-light)]">dev</span>
      </p>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-3 md:gap-6">
        {links.map((link, index) => (
          <div key={index} className="flex items-center gap-3 md:gap-6">
            <Link
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition"
            >
              {link.name}
            </Link>
            {index < links.length - 1 && separator}
          </div>
        ))}
      </div>

      {/* Hamburger (Mobile only) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`hamburger ${menuOpen ? "open" : ""} flex flex-col justify-between w-6 h-5 focus:outline-none cursor-pointer hover:opacity-75 transition-opacity`}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--theme-darkest)] border-t border-white/10 md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-neutral-400 hover:text-white transition text-sm flex justify-between group"
              >
                {link.name}<span className='inline-block translate-x-1 transition-transform opacity-25 group-hover:opacity-100 group-hover:translate-x-2'>→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}