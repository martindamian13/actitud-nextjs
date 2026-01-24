'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface Distribution {
  id: string;
  name: string;
  description: string;
  capacity: string;
  image: string;
  features: string[];
}

const distributions: Distribution[] = [
  {
    id: 'delivery',
    name: 'Así recibís tu planta',
    description: 'Planta libre lista para tu proyecto',
    capacity: '175 m² libres',
    image: '/images/plantas/planta-libre.png',
    features: ['Planta libre', '175 m²', 'Lista para equipar'],
  },
  {
    id: 'offices',
    name: 'Oficinas con divisiones',
    description: 'Ejemplo con oficinas privadas y sala de reuniones',
    capacity: 'Hasta 20 personas',
    image: '/images/plantas/oficina-equipada.png',
    features: ['Oficinas privadas', 'Sala de reuniones', 'Divisiones de vidrio'],
  },
  {
    id: 'corporate',
    name: 'Oficina corporativa',
    description: 'Ejemplo de recepción y área de atención al cliente',
    capacity: 'Hasta 15 personas',
    image: '/images/plantas/oficina-corporativa.png',
    features: ['Recepción', 'Sala de espera', 'Imagen corporativa'],
  },
  {
    id: 'clinic',
    name: 'Consultorio / Clínica',
    description: 'Ejemplo de uso para salud, estética o bienestar',
    capacity: 'Hasta 10 consultorios',
    image: '/images/plantas/consultorio.png',
    features: ['Consultorios', 'Recepción', 'Sala de espera'],
  },
  {
    id: 'plan',
    name: 'Distribución mixta',
    description: 'Vista aérea con ejemplo de distribución combinada',
    capacity: 'Hasta 30 personas',
    image: '/images/plantas/planta-humanizada.png',
    features: ['Área colaborativa', 'Oficinas privadas', 'Zonas comunes'],
  },
];

export default function FloorPlans() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % distributions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + distributions.length) % distributions.length);
  };

  const currentDistribution = distributions[currentSlide];

  return (
    <section id="plantas" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Image + Copy */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">IMAGINÁ LAS POSIBILIDADES<br />DE TU OFICINA</h2>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            175 m² de planta libre para diseñar el espacio que tu empresa necesita
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-3 md:p-5 rounded-xl shadow-lg"
        >
          {/* Image */}
          <div className="relative h-[220px] sm:h-[280px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={currentDistribution.image}
              alt={currentDistribution.name}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Distribución anterior"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Siguiente distribución"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Info Bar */}
          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold text-dark-gray">{currentDistribution.name}</h4>
              <p className="text-sm text-medium-gray">{currentDistribution.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentDistribution.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-accent-green/10 text-accent-green"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {distributions.map((dist, index) => (
              <button
                key={dist.id}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-primary-blue'
                    : 'w-4 bg-medium-gray/30 hover:bg-medium-gray/50'
                }`}
                aria-label={`Ver ${dist.name}`}
              />
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-medium-gray mt-4 italic">
            * Imágenes ilustrativas. Las plantas se entregan libres, sin equipamiento ni divisiones.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-dark-gray mb-4">¿Tenés una idea de distribución?</p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white bg-accent-green hover:bg-accent-green/90 transition-all hover:scale-105"
          >
            Consultanos
          </a>
        </div>
      </div>
    </section>
  );
}
