'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const stats = [
  { number: '6', label: 'Pisos de oficinas' },
  { number: '175', label: 'm² por planta' },
  { number: '1.573', label: 'm² totales' },
  { number: '1', label: 'Piso de amenities' },
];

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="edificio" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            viewport={{ once: true }}
          >
            {/* Project Status Badge + Progress */}
            <div className="inline-flex items-center gap-3 bg-accent-green/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wide text-accent-green">En construcción</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 bg-accent-green/20 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-green rounded-full w-1/4" />
                </div>
                <span className="text-xs font-bold text-accent-green">25%</span>
              </div>
            </div>

            <h2 className="mb-6">
              Espacios diseñados para<br />
              potenciar tu empresa
            </h2>
            <p className="text-lg text-dark-gray mb-10 max-w-lg">
              Oficinas de planta libre con amenities exclusivos, pensadas para empresas que buscan proyección y confort.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-primary-blue pl-4"
                >
                  <span className="text-3xl md:text-4xl font-black text-deep-blue-black">
                    {stat.number}
                  </span>
                  <p className="text-sm md:text-base text-dark-gray mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
            viewport={{ once: true }}
            className="relative h-[350px] md:h-[450px] lg:h-[550px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero/fachada-frontal.png"
              alt="Edificio Actitud - Vista frontal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
