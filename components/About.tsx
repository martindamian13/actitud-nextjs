'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const stats: { prefix?: string; number: string; label: string }[] = [
  { number: '6', label: 'Pisos de oficinas' },
  { prefix: 'Hasta', number: '190', label: 'm² por unidad' },
  { number: '1', label: 'Piso de amenities' },
];

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="edificio" className="py-24 lg:py-32 bg-white overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            viewport={{ once: true }}
          >
            {/* Project Status Badge + Progress */}
            <div className="inline-flex items-center gap-3 bg-primary-blue/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary-blue rounded-full animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wide text-primary-blue">En construcción</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 bg-primary-blue/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-blue rounded-full w-[30%]" />
                </div>
                <span className="text-xs font-bold text-primary-blue">30%</span>
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
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-primary-blue pl-3 md:pl-4 lg:flex lg:flex-col lg:justify-center"
                >
                  {/* Below lg the prefix line is reserved on every stat so numbers align; on lg stats are centered vertically */}
                  <span
                    className={`block text-sm md:text-base font-semibold text-dark-gray ${stat.prefix ? '' : 'invisible lg:hidden'}`}
                    aria-hidden={!stat.prefix}
                  >
                    {stat.prefix ?? ' '}
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-bold font-display text-primary-blue">
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
            className="relative aspect-[1704/936] -mx-4 sm:mx-0 lg:-mr-8 xl:-mr-16"
          >
            <Image
              src="/images/edificio/fachada-logo-nuevo.png"
              alt="Edificio Actitud - Vista frontal"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
