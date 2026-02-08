import { motion } from 'framer-motion'
import burgerHero from '../assets/foto/foto-2.webp'
import burger2 from '../assets/foto/foto-10.webp'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[var(--color-cream)] texture-paper texture-noise">

      <div className="relative z-10 min-h-screen">
        {/* Main content */}
        <div className="pt-32 lg:pt-40 px-6 md:px-12 lg:px-20">
          {/* Title - large, overlapping the image area */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <span className="text-[var(--color-orange)] font-medium text-sm tracking-wider uppercase">
              Street Food — Bellizzi (SA)
            </span>
            <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] text-[var(--color-brown)] mt-4">
              MO'
              <br />
              <span className="lg:ml-[15vw]">MAGN</span>
            </h1>
          </motion.div>

          {/* Description - offset position */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[var(--color-brown)] opacity-70 text-lg max-w-sm mt-8 lg:mt-0 lg:absolute lg:left-20 lg:bottom-[28vh]"
          >
            Fritti artigianali, smash burger e bun. Ingredienti freschi, preparati ogni giorno con cura.
          </motion.p>

          {/* CTA buttons - different position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-10 lg:absolute lg:left-20 lg:bottom-[15vh]"
          >
            <a href="#menu" className="btn-primary">
              Scopri il Menu
            </a>
            <a href="#contatti" className="btn-yellow">
              Prenota
            </a>
          </motion.div>
        </div>

        {/* Images - overlapping, different sizes */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="absolute right-[5vw] lg:right-[12vw] top-[35vh] lg:top-[18vh] w-[75vw] lg:w-[38vw]"
        >
          <img
            src={burgerHero}
            alt="Burger Mo' Magn"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Second image - smaller, overlapping */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute left-[8vw] lg:left-[38vw] bottom-[18vh] lg:bottom-[12vh] w-[40vw] lg:w-[18vw] hidden md:block"
        >
          <img
            src={burger2}
            alt="Dettaglio"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* Marquee - at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="marquee-item">
                SMASH BURGER • FRITTI ARTIGIANALI • BUN • HOT DOG • DOLCI
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
