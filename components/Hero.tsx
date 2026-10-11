'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-deep-blue-black">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/videos/video-principal.mp4"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay={!prefersReducedMotion}
          loop
          muted
          playsInline
          preload="auto"
        />
        {/* Overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 relative z-10 w-full text-center">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold leading-tight mb-6 text-white text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Tu futuro corporativo empieza acá.
          </h1>
          <p className="text-sm md:text-lg text-white/90 mb-10 md:mb-12 font-light max-w-xl mx-auto text-balance">
            Actitud nace para acompañar a empresas que quieren avanzar con confianza, flexibilidad y una mirada positiva hacia el futuro.
          </p>
          <a
            href="#edificio"
            className="inline-flex flex-col items-center gap-1 text-white text-sm md:text-base font-medium hover:text-white/80 transition-colors"
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
      </div>
    </section>
  );
}
