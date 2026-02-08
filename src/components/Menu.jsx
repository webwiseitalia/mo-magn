import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

import frittoImage from '../assets/foto/foto-1.webp'
import burgerImage from '../assets/foto/foto-2.webp'
import bunImage from '../assets/foto/foto-3.webp'
import hotdogImage from '../assets/foto/imgi_10_HZhXJA-89733970-1c6f-414c-a00e-dd12bc89e20f.webp'
import dolceImage from '../assets/foto/foto-15.webp'

const categories = [
  {
    id: 'fritti',
    name: 'Friggitoria',
    image: frittoImage,
    items: ['Frittatina di Pasta', 'Frittatina Cheddar & Bacon', 'Magnum di Scottona', 'Crocchettone', 'Nuggets Artigianali', 'La Fontana di Cheddar']
  },
  {
    id: 'smash',
    name: 'Smash Burger',
    image: burgerImage,
    items: ['Smash Classic', 'Double Smash', 'Smash Bacon', 'Smash Cheese']
  },
  {
    id: 'bun',
    name: 'I Nostri Bun',
    image: bunImage,
    items: ['Crispy Mo\' Magn', 'Mo\' Magn 2.0', 'Resto al Sud', 'Mortazza 2.0']
  },
  {
    id: 'hotdog',
    name: 'Hot Dog',
    image: hotdogImage,
    items: ['Hot Dog Classic', 'Hot Dog BBQ', 'Hot Dog Deluxe']
  },
  {
    id: 'dolci',
    name: 'Dolci',
    image: dolceImage,
    items: ['Mini-Bun Nutella', 'Baguette Dolce', 'Bomba alla Crema']
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('fritti')
  const active = categories.find(c => c.id === activeCategory)

  return (
    <section id="menu" className="py-32 bg-[var(--color-cream)] overflow-hidden texture-paper texture-dots">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Header - right aligned this time */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:ml-auto lg:text-right max-w-xl mb-16"
        >
          <span className="text-[var(--color-orange)] font-medium text-sm tracking-wider uppercase">
            Cosa Offriamo
          </span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-[var(--color-brown)] mt-4 leading-[0.95]">
            Il Menu
          </h2>
        </motion.div>

        {/* Tabs - left aligned, not centered */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeCategory === cat.id
                  ? 'bg-[var(--color-brown)] text-[var(--color-cream)]'
                  : 'bg-white text-[var(--color-brown)] hover:bg-[var(--color-cream-dark)]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Content - asymmetric layout */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Image - large, offset */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:w-[55%]"
              >
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-full h-[50vh] lg:h-[70vh] object-cover rounded-2xl"
                />
              </motion.div>

              {/* Items list - overlapping the image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:absolute lg:right-0 lg:top-[10%] lg:w-[50%] mt-6 lg:mt-0"
              >
                <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl">
                  <h3 className="font-display text-3xl text-[var(--color-brown)] mb-6">
                    {active.name}
                  </h3>
                  <div className="space-y-3">
                    {active.items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0"
                      >
                        <span className="w-6 h-6 bg-[var(--color-yellow)] rounded-full flex items-center justify-center text-xs font-semibold text-[var(--color-cream)]">
                          {i + 1}
                        </span>
                        <span className="text-[var(--color-brown)]">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA - offset position */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-8 lg:ml-[55%]"
        >
          <a
            href="https://momagn.tidelizio.menu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Menu Completo <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
