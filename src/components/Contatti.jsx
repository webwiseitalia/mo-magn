import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    data: '',
    ora: '',
    persone: '2',
    note: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Prenotazione Mo' Magn%0A%0ANome: ${formData.nome}%0ATel: ${formData.telefono}%0AData: ${formData.data}%0AOra: ${formData.ora}%0APersone: ${formData.persone}%0ANote: ${formData.note || '-'}`
    window.open(`https://wa.me/390828031401?text=${msg}`, '_blank')
  }

  return (
    <section id="contatti" className="py-32 bg-[var(--color-yellow)] overflow-hidden texture-grain texture-lines">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Header - left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-20"
        >
          <span className="text-[var(--color-cream)] font-medium text-sm tracking-wider uppercase opacity-60">
            Contatti
          </span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-[var(--color-cream)] mt-4 leading-[0.95]">
            Vieni a trovarci
          </h2>
        </motion.div>

        <div className="relative">
          {/* Info cards - stacked on left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%] space-y-4"
          >
            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-[var(--color-orange)] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-brown)]">Indirizzo</h4>
                <p className="text-[var(--color-brown)] opacity-60 text-sm mt-1">
                  Via Roma, 376 — 84092 Bellizzi (SA)
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-[var(--color-brown)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[var(--color-cream)]" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-brown)]">Orari</h4>
                <p className="text-[var(--color-brown)] opacity-60 text-sm mt-1">
                  Mar - Dom: 19:00 - 23:30
                  <br />
                  <span className="text-[var(--color-orange)]">Lunedì chiuso</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-[var(--color-orange)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-brown)]">Telefono</h4>
                <a
                  href="tel:+390828031401"
                  className="text-[var(--color-brown)] font-semibold text-lg hover:text-[var(--color-orange)] transition-colors"
                >
                  0828 031401
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-40 mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.4842449544!2d14.940931776445!3d40.62150397141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bc5f9f8e8e8e5%3A0x1234567890abcdef!2sVia%20Roma%2C%20376%2C%2084092%20Bellizzi%20SA!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Mappa"
              />
            </div>
          </motion.div>

          {/* Form - overlapping, offset right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:absolute lg:right-0 lg:top-[-5%] lg:w-[55%] mt-8 lg:mt-0"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl">
              <h3 className="font-display text-2xl text-[var(--color-brown)] mb-1">
                Prenota un tavolo
              </h3>
              <p className="text-[var(--color-brown)] opacity-50 text-sm mb-8">
                Ti confermeremo su WhatsApp
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-brown)] mb-1.5">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="input-playful"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-brown)] mb-1.5">Telefono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="input-playful"
                      placeholder="+39..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-brown)] mb-1.5">Data</label>
                    <input
                      type="date"
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                      required
                      className="input-playful"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-brown)] mb-1.5">Ora</label>
                    <select
                      name="ora"
                      value={formData.ora}
                      onChange={handleChange}
                      required
                      className="input-playful"
                    >
                      <option value="">—</option>
                      {['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-brown)] mb-1.5">Persone</label>
                    <select
                      name="persone"
                      value={formData.persone}
                      onChange={handleChange}
                      className="input-playful"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-brown)] mb-1.5">Note</label>
                  <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    rows={3}
                    className="input-playful resize-none"
                    style={{ borderRadius: '0.75rem' }}
                    placeholder="Allergie, richieste..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Prenota via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
