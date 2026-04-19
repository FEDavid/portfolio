'use client'
// Import hooks
import { useEffect, useState } from "react"

// Import libraries
import Link from "next/link";

export default function Navigation() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // tweak threshold
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const base = "flex gap-6 justify-between py-6 px-7 w-full fixed z-1000"
  const scrolledStyles = "backdrop-blur-lg bg-[var(--theme-darkest)]/50 border-b border-[#ffffff]/10"

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#content" },
    { name: "Contact", href: "#footer" },
  ];

  const seperator = <span className="text-[var(--theme-light)]">/</span>;

  return (
    <nav className={`${base} ${scrolled ? scrolledStyles : ""} transition-all duration-300`}>
      {/* content */}
      <p className="font-funnel text-xl whitespace-nowrap">david-mould.<span className="font-[1000] text-[var(--theme-light)]">dev</span></p>
      <div className="flex items-center gap-3 md:gap-6">
        {links.map((link, index) => (
          <div key={index} className="flex items-center gap-3 md:gap-6">
            <Link
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition">
              {link.name}
            </Link>
            {index < links.length - 1 && seperator}
          </div>
        ))}
      </div>
    </nav>
  );
}