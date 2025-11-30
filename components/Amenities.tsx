'use client';

import { motion } from 'framer-motion';

const amenities = [
  { title: 'Sala de reuniones', icon: '🏢' },
  { title: 'Sala de conferencias', icon: '👥' },
  { title: 'Espacios comunes climatizados', icon: '❄️' },
  { title: 'Conexiones para A/C tipo Casette', icon: '🔌' },
  { title: 'Ascensor de alta velocidad', icon: '🛗' },
  { title: 'Terraza', icon: '🌳' },
  { title: 'Transformador propio', icon: '⚡' },
  { title: 'Estacionamiento asignado', icon: '🅿️' },
  { title: 'CCTV en espacios comunes', icon: '📹' },
  { title: 'WiFi en espacios comunes', icon: '📶' },
  { title: 'Generador propio', icon: '🔋' },
  { title: 'Sanitarios con accesibilidad', icon: '♿' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 lg:py-32 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center mb-16">AMENITIES ÚNICAS EN EL MERCADO CORPORATIVO</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{amenity.icon}</div>
              <h3 className="text-lg font-semibold text-dark-gray">{amenity.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
