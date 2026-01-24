'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const amenities = [
  {
    title: 'Coworking',
    subtitle: 'Espacios de trabajo compartido',
    image: '/images/amenities/coworking.png',
  },
  {
    title: 'Sala de Conferencias',
    subtitle: 'Capacitaciones y presentaciones',
    image: '/images/amenities/conferencias.png',
  },
  {
    title: 'Sala de Reuniones',
    subtitle: 'Encuentros ejecutivos',
    image: '/images/amenities/reuniones.png',
  },
  {
    title: 'The Rooftop',
    subtitle: 'Terraza y quincho',
    image: '/images/amenities/rooftop.png',
  },
];

export default function FeaturedAmenities() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          AMENITIES 100% EQUIPADOS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-[220px] md:h-[280px] lg:h-[320px] rounded-xl overflow-hidden group cursor-default"
            >
              <Image
                src={amenity.image}
                alt={amenity.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">{amenity.title}</h3>
                <p className="text-sm text-white/80 mt-1">{amenity.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
