import { motion } from 'framer-motion'
import aboutImage from '../assets/foto/foto-5.webp'
import aboutImage2 from '../assets/foto/foto-6.webp'

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="py-32 bg-[var(--color-brown)] overflow-hidden texture-grain texture-vignette">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Top section - title overlapping image */}
        <div className="relative mb-20 lg:mb-32">
          {/* Title - positioned to overlap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 lg:w-[60%]"
          >
            <span className="text-[var(--color-yellow)] font-medium text-sm tracking-wider uppercase">
              Chi Siamo
            </span>
            <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] text-[var(--color-cream)] mt-4 leading-[0.9]">
              L'amore passa
              <br />
              <span className="lg:ml-[10%]">dallo stomaco</span>
            </h2>
          </motion.div>

          {/* Image - offset right, behind title on large screens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:absolute lg:right-0 lg:top-[-20%] lg:w-[50%] mt-8 lg:mt-0"
          >
            <img
              src={aboutImage}
              alt="La nostra cucina"
              className="w-full h-[40vh] lg:h-[60vh] object-cover rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Bottom section - text and second image */}
        <div className="relative">
          {/* Second image - left side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%]"
          >
            <img
              src={aboutImage2}
              alt="I nostri piatti"
              className="w-full h-[35vh] lg:h-[45vh] object-cover rounded-2xl"
            />
          </motion.div>

          {/* Text - overlapping image on right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:absolute lg:right-0 lg:top-[15%] lg:w-[55%] mt-8 lg:mt-0"
          >
            <div className="bg-[var(--color-cream)] p-8 lg:p-12 rounded-2xl">
              <p className="text-lg text-[var(--color-brown)] leading-relaxed mb-6">
                Da <strong>Mo' Magn</strong> crediamo che il cibo sia la forma più pura di amore.
                Ogni piatto nasce dalla passione per gli ingredienti di qualità.
              </p>
              <p className="text-[var(--color-brown)] opacity-70 leading-relaxed mb-6">
                I nostri fritti artigianali sono preparati con dedizione. La carne di
                Scottona prussiana viene macinata fresca ogni giorno nel nostro laboratorio.
              </p>
              <p className="text-[var(--color-brown)] opacity-70 leading-relaxed">
                Cucina a vista significa trasparenza totale: nulla da nascondere.
              </p>

              {/* Features - simple list */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[var(--color-brown)] border-opacity-10">
                {['Fritti Artigianali', 'Carne Fresca', 'Cucina a Vista', 'Ingredienti Top'].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-orange)] rounded-full" />
                    <span className="text-sm text-[var(--color-brown)]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote - offset at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-32 lg:w-[70%] lg:ml-auto"
        >
          <blockquote className="font-display text-[clamp(1.5rem,4vw,2.5rem)] text-[var(--color-cream)] leading-tight">
            "Hai Mangiato? è la più autentica espressione d'amore"
          </blockquote>
          <p className="text-[var(--color-yellow)] mt-4 font-medium">— Mo' Magn</p>
        </motion.div>
      </div>
    </section>
  )
}
