'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-beige overflow-hidden pt-20">
      {/* Accent Stripes */}
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 lg:w-32 flex">
        <div className="flex-1 bg-accent-blue"></div>
        <div className="flex-1 bg-accent-green"></div>
        <div className="flex-1 bg-accent-orange"></div>
      </div>

      {/* Background Image */}
      <div
        className="absolute right-12 md:right-24 lg:right-40 top-0 bottom-0 w-1/3 md:w-1/2 opacity-15 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80')"
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
        >
          <h1 className="font-black leading-none mb-8">
            EDIFICIO<br />
            CORPORATIVO
          </h1>
          <p className="text-xl md:text-2xl text-dark-gray max-w-2xl mb-12 font-light">
            Donde la productividad y el bienestar se encuentran
          </p>
          <a
            href="#contacto"
            className="inline-block bg-primary-blue text-white px-8 md:px-12 py-4 md:py-5 text-lg font-semibold rounded hover:bg-primary-dark-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Conocer más
          </a>
        </motion.div>
      </div>
    </section>
  );
}
