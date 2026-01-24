'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const slides = [
  {
    image: '/images/hero/fachada.png',
    alt: 'Edificio Actitud - Fachada',
    title: 'EDIFICIO\nCORPORATIVO',
    subtitle: 'A 10 min del eje corporativo',
    detail: 'Planta libre desde consultar | 1.573 m²',
    cta: { text: 'Conocer más', href: '#contacto' },
  },
  {
    image: '/images/hero/salones-comerciales.png',
    alt: 'Salones Comerciales - Planta Baja',
    title: 'SALONES\nCOMERCIALES',
    subtitle: 'Espacios en alquiler',
    detail: 'Farmacia · Laboratorio · Locales comerciales',
    cta: { text: 'Consultar disponibilidad', href: '#contacto' },
  },
];

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next, prefersReducedMotion]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-dark-gray">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="font-black leading-none mb-4 text-white whitespace-pre-line">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2 font-light">
              {slide.subtitle}
            </p>
            <p className="text-base md:text-lg text-white/70 mb-10 font-light">
              {slide.detail}
            </p>
            <a
              href={slide.cta.href}
              className="inline-block bg-primary-blue text-white px-8 md:px-12 py-4 md:py-5 text-lg font-semibold rounded hover:bg-primary-dark-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {slide.cta.text}
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-6 lg:left-8 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-10 bg-white'
                  : 'w-6 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Accent Stripe (subtle) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-accent-blue"></div>
        <div className="flex-1 bg-accent-green"></div>
        <div className="flex-1 bg-accent-orange"></div>
      </div>
    </section>
  );
}
