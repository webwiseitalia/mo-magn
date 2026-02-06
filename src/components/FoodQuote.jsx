import { motion } from 'framer-motion'
import burger1 from '../assets/foto/foto-3.webp'
import burger2 from '../assets/foto/foto-12.webp'
import burger3 from '../assets/foto/foto-18.webp'

export default function FoodQuote() {
  return (
    <section className="py-20 px-6 bg-[var(--color-cream)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="quote-text leading-relaxed">
            HAI MANGIATO?{' '}
            <img src={burger1} alt="" className="quote-image" />
            {' '}LITTLE RIVALS THE{' '}
            <img src={burger2} alt="" className="quote-image" />
            {' '}PLEASURE OF TEARING{' '}
            <img src={burger3} alt="" className="quote-image" />
            {' '}INTO A GLISTENING BURGER
          </h2>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mt-12"
        >
          <span className="text-4xl animate-wiggle">🍔</span>
          <span className="text-4xl animate-float">❤️</span>
          <span className="text-4xl animate-wiggle" style={{ animationDelay: '0.5s' }}>🍔</span>
        </motion.div>
      </div>
    </section>
  )
}
