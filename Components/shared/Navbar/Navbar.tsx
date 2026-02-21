"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaHome, FaBlog, FaEnvelope, FaSignInAlt } from "react-icons/fa"

const links = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/blog", label: "Blog", icon: FaBlog },
  { href: "/contact", label: "Contact", icon: FaEnvelope },
  { href: "/login", label: "Login", icon: FaSignInAlt },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-black/70 backdrop-blur-xl border-b border-white/10">

      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold tracking-wide text-white transition duration-300 hover:text-blue-400"
      >
        Portfolio
      </Link>

      {/* Links */}
      <ul className="flex items-center gap-8">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href)

          const Icon = link.icon

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative group flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300
                  ${isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {/* Sliding active background */}
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-md animate-pulse" />
                )}

                {/* Icon */}
                <Icon
                  className={`transition-all duration-300
                    group-hover:scale-125 group-hover:rotate-6
                    ${isActive ? "text-blue-500 scale-110" : ""}
                  `}
                />

                <span>{link.label}</span>

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left
                    bg-gradient-to-r from-blue-500 to-purple-500
                    transition-transform duration-300
                    ${isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                    }`}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}