import { Instagram, Facebook, Phone } from 'lucide-react'
import logoBlack from '../assets/logo-black.webp'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-brown)] py-16 texture-grain">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <img
              src={logoBlack}
              alt="Mo' Magn"
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-[var(--color-cream)] opacity-60 text-sm">
              Street food autentico a Bellizzi
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-[var(--color-yellow)] mb-4">Menu</h4>
            <nav className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Menu', href: '#menu' },
                { name: 'Chi Siamo', href: '#chi-siamo' },
                { name: 'Contatti', href: '#contatti' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-[var(--color-cream)] opacity-60 hover:opacity-100 transition-opacity text-sm"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[var(--color-yellow)] mb-4">Contatti</h4>
            <address className="not-italic space-y-2 text-[var(--color-cream)] opacity-60 text-sm">
              <p>Via Roma, 376</p>
              <p>84092 Bellizzi (SA)</p>
              <p className="mt-3">Mar - Dom: 19:00 - 23:30</p>
              <a
                href="tel:+390828031401"
                className="block text-[var(--color-yellow)] mt-2"
              >
                0828 031401
              </a>
            </address>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-[var(--color-yellow)] mb-4">Seguici</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/mo_magn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--color-yellow)] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 text-[var(--color-cream)]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--color-yellow)] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5 text-[var(--color-cream)]" />
              </a>
              <a
                href="tel:+390828031401"
                className="w-10 h-10 bg-[var(--color-yellow)] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Phone className="w-5 h-5 text-[var(--color-cream)]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--color-cream)] border-opacity-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-cream)] opacity-40 text-xs">
            © {currentYear} Mo' Magn — Tutti i diritti riservati
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[var(--color-cream)] opacity-40 hover:opacity-100 text-xs transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="text-[var(--color-cream)] opacity-40 hover:opacity-100 text-xs transition-opacity">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
