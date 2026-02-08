import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoBlack from '../assets/logo-black.webp'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Chi Siamo', href: '#chi-siamo' },
    { name: 'Contatti', href: '#contatti' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-4">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="relative z-50">
            <img
              src={logoBlack}
              alt="Mo' Magn"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-display text-[var(--color-brown)] hover:text-[var(--color-orange)] transition-colors text-lg"
              >
                {link.name}
              </a>
            ))}
            <a href="#contatti" className="btn-primary">
              Ordina
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden w-12 h-12 bg-[var(--color-brown)] rounded-full flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-[var(--color-yellow)] block"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-[var(--color-yellow)] block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-[var(--color-yellow)] block"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--color-cream)] pt-24 px-6"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-display text-4xl text-[var(--color-brown)]"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contatti"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="btn-yellow text-xl mt-4"
              >
                Ordina Ora 🍔
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
