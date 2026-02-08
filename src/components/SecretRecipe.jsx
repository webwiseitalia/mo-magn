import { motion } from 'framer-motion'
import img1 from '../assets/foto/foto-5.webp'
import img2 from '../assets/foto/foto-8.webp'
import img3 from '../assets/foto/foto-17.webp'

export default function SecretRecipe() {
  return (
    <section className="py-32 bg-[var(--color-yellow)] overflow-hidden texture-grain texture-lines">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Header - offset to left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-20"
        >
          <span className="text-[var(--color-cream)] font-medium text-sm tracking-wider uppercase opacity-60">
            I Nostri Ingredienti
          </span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] text-[var(--color-cream)] mt-4">
            Qualità che si sente
          </h2>
        </motion.div>

        {/* Cards - staggered layout */}
        <div className="relative">
          {/* Card 1 - left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-[45%] mb-8 lg:mb-0"
          >
            <div className="relative">
              <img
                src={img1}
                alt="Carne di Scottona"
                className="w-full h-72 lg:h-80 object-cover rounded-2xl"
              />
              {/* Text overlapping image */}
              <div className="lg:absolute lg:-right-20 lg:-bottom-12 bg-white p-6 lg:p-8 rounded-xl shadow-lg lg:w-72 mt-4 lg:mt-0">
                <h3 className="font-display text-xl text-[var(--color-brown)]">Carne di Scottona</h3>
                <p className="text-[var(--color-brown)] opacity-60 text-sm mt-2">
                  100% carne prussiana macinata fresca ogni giorno nel nostro laboratorio.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - offset right, higher up */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:w-[40%] lg:ml-auto lg:-mt-20 mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Text before image on this one */}
              <div className="lg:absolute lg:-left-16 lg:top-8 bg-[var(--color-brown)] p-6 lg:p-8 rounded-xl shadow-lg lg:w-64 mb-4 lg:mb-0 z-10">
                <h3 className="font-display text-xl text-[var(--color-yellow)]">Fritti Artigianali</h3>
                <p className="text-[var(--color-cream)] opacity-70 text-sm mt-2">
                  Frittatine, crocchette e nuggets preparati a mano.
                </p>
              </div>
              <img
                src={img2}
                alt="Fritti Artigianali"
                className="w-full h-64 lg:h-72 object-cover rounded-2xl relative"
              />
            </div>
          </motion.div>

          {/* Card 3 - back to left, lower */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:w-[50%] lg:ml-[10%] lg:-mt-8"
          >
            <div className="relative">
              <img
                src={img3}
                alt="Fontana di Cheddar"
                className="w-full h-72 lg:h-96 object-cover rounded-2xl"
              />
              <div className="lg:absolute lg:right-8 lg:-bottom-8 bg-white p-6 rounded-xl shadow-lg lg:w-60 mt-4 lg:mt-0">
                <h3 className="font-display text-lg text-[var(--color-brown)]">Fontana di Cheddar</h3>
                <p className="text-[var(--color-brown)] opacity-60 text-sm mt-2">
                  Cheddar fuso che cola come una fontana.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
