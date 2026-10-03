'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const slides = [
  {
    image: '/images/amenities/rooftop.png',
    alt: 'The Rooftop - Terraza del edificio Actitud',
  },
  {
    image: '/images/amenities/reuniones.png',
    alt: 'Sala de reuniones del edificio Actitud',
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-deep-blue-black">
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
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 relative z-10 w-full text-center">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold leading-tight mb-6 text-white text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Tu futuro corporativo empieza acá.
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-12 md:mb-16 font-light max-w-2xl mx-auto text-balance">
            Actitud nace para acompañar a empresas que quieren avanzar con confianza, flexibilidad y una mirada positiva hacia el futuro.
          </p>
          <a
            href="#edificio"
            className="inline-flex flex-col items-center gap-1 text-white text-base md:text-lg font-medium hover:text-white/80 transition-colors"
          >
            Descubrí más
            <svg
              className="w-6 h-6 motion-safe:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 translate-y-12 md:translate-y-8">
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
    </section>
  );
}
