'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import {
  CorporateIcon,
  AirportIcon,
  ParkIcon,
  SportsIcon,
  SoccerIcon,
  MapPinIcon,
} from '@/components/icons/LocationIcons';
import LazyIframe from '@/components/LazyIframe';

export default function Location() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const locations = [
    { name: 'CIT', description: 'Centro de Innovación Tecnológica', time: '3 min', Icon: SportsIcon },
    { name: 'Eje Corporativo', description: 'Polo empresarial', time: '10 min', Icon: CorporateIcon },
    { name: 'Aeropuerto', description: 'Silvio Pettirossi', time: '10 min', Icon: AirportIcon },
    { name: 'Parque Ñu Guazú', description: 'Área verde y recreativa', time: '3 min', Icon: ParkIcon },
    { name: 'Conmebol', description: 'Sede confederación', time: '8 min', Icon: SoccerIcon },
  ];

  return (
    <section id="ubicacion" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">UBICACIÓN ESTRATÉGICA</h2>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            En el corazón de Campo Grande, conectado con los principales puntos de la ciudad
          </p>
        </motion.div>

        {/* Location Cards - Horizontal */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-10"
        >
          {locations.map((location) => {
            const Icon = location.Icon;
            return (
              <div
                key={location.name}
                className="bg-gradient-blue rounded-lg p-4 text-white text-center"
              >
                <div className="flex justify-center mb-2">
                  <Icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <p className="text-lg md:text-xl font-bold">{location.time}</p>
                <p className="text-sm font-semibold mt-1">{location.name}</p>
                <p className="text-xs opacity-75 mt-0.5 hidden md:block">{location.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Map - Satellite View */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-2xl relative"
        >
          <LazyIframe
            src="https://www.google.com/maps?q=General+Abdón+Caballero+esquina+Orlando+Salerno+Netto,+Campo+Grande,+Luque,+Paraguay&output=embed&z=14&t=k"
            title="Ubicación Actitud - Vista satelital"
            height="450px"
            allowFullScreen={true}
            className="h-[350px] md:h-[450px]"
          />
          {/* Mobile overlay */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=General+Abdón+Caballero+esquina+Orlando+Salerno+Netto,+Campo+Grande,+Luque,+Paraguay"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 lg:hidden flex items-end justify-center pb-4"
            aria-label="Abrir en Google Maps para obtener direcciones"
          >
            <span className="bg-white text-primary-blue px-4 py-2 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" />
              Cómo llegar
            </span>
          </a>
        </motion.div>

        {/* Address */}
        <p className="text-center text-dark-gray mt-6 text-sm">
          General Abdón Caballero esq. Orlando Salerno Netto, Campo Grande, Luque
        </p>
      </div>
    </section>
  );
}
