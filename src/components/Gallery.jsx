import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

import img1 from '../assets/foto/foto-4.webp'
import img2 from '../assets/foto/foto-7.webp'
import img3 from '../assets/foto/foto-11.webp'
import img4 from '../assets/foto/foto-13.webp'
import img5 from '../assets/foto/foto-14.webp'
import img6 from '../assets/foto/foto-19.webp'

export default function Gallery() {
  return (
    <section className="py-32 bg-[var(--color-cream-dark)] overflow-hidden texture-paper texture-noise">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Header with CTA - split layout */}
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

        {/* Gallery - irregular grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Large image */}
          <motion.a
            href="https://instagram.com/mo_magn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img1}
              alt="Gallery"
              className="w-full h-[40vh] md:h-[50vh] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>

          {/* Two stacked */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            <motion.a
              href="https://instagram.com/mo_magn"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl flex-1"
            >
              <img
                src={img2}
                alt="Gallery"
                className="w-full h-full min-h-[20vh] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
            </motion.a>
            <motion.a
              href="https://instagram.com/mo_magn"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="group relative overflow-hidden rounded-2xl flex-1"
            >
              <img
                src={img3}
                alt="Gallery"
                className="w-full h-full min-h-[20vh] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
            </motion.a>
          </div>

          {/* Three in a row - different widths */}
          <motion.a
            href="https://instagram.com/mo_magn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-6 md:col-span-4 group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img4}
              alt="Gallery"
              className="w-full h-[25vh] md:h-[30vh] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>

          <motion.a
            href="https://instagram.com/mo_magn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="col-span-6 md:col-span-5 group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img5}
              alt="Gallery"
              className="w-full h-[25vh] md:h-[30vh] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>

          <motion.a
            href="https://instagram.com/mo_magn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-12 md:col-span-3 group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img6}
              alt="Gallery"
              className="w-full h-[25vh] md:h-[30vh] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-brown)] opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
