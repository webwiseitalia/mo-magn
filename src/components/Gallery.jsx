import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

import img1 from '../assets/foto/foto-5.webp'
import img2 from '../assets/foto/foto-7.webp'
import img3 from '../assets/foto/foto-11.webp'
import img4 from '../assets/foto/foto-13.webp'
import img5 from '../assets/foto/foto-14.webp'
import img6 from '../assets/foto/foto-19.webp'


export default function Gallery() {
  return (
    <section className="py-32 bg-[var(--color-cream-dark)] overflow-hidden texture-paper texture-noise">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Header with CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[var(--color-orange)] font-medium text-sm tracking-wider uppercase">
              Instagram
            </span>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-[var(--color-brown)] mt-4 leading-[0.95]">
              @mo_magn
            </h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://instagram.com/mo_magn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow inline-flex items-center gap-2 mt-6 lg:mt-0"
          >
            <Instagram size={18} /> Seguici
          </motion.a>
        </div>

        {/* Gallery - asymmetric grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 auto-rows-[200px]">
          {/* Large image - spans 2 cols and 2 rows */}
          <motion.a
            href="https://instagram.com/mo_magn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img1}
              alt="Mo' Magn Instagram"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>

          {/* Medium image */}
          <motion.a
            href="https://instagram.com/mo_magn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img2}
              alt="Mo' Magn Instagram"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>

          {/* Tall image - spans 2 rows */}
          <motion.a
            href="https://instagram.com/mo_magn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img3}
              alt="Mo' Magn Instagram"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>

          {/* Small square */}
          <motion.a
            href="https://instagram.com/mo_magn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img4}
              alt="Mo' Magn Instagram"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>

          {/* Wide image */}
          <motion.a
            href="https://instagram.com/mo_magn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-2 md:col-span-3 row-span-1 group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img5}
              alt="Mo' Magn Instagram"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>

          {/* Last image */}
          <motion.a
            href="https://instagram.com/mo_magn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="col-span-2 md:col-span-3 row-span-1 group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img6}
              alt="Mo' Magn Instagram"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
