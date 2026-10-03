'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import {
  CorporateIcon,
  AirportIcon,
  // ParkIcon, // Parque Ñu Guazú (oculto por ahora, ver `locations`)
  SportsIcon,
  SoccerIcon,
  MapPinIcon,
} from '@/components/icons/LocationIcons';
import LazyIframe from '@/components/LazyIframe';

export default function Location() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const locations = [
    { name: 'Club Internacional de Tenis', time: '3 min', Icon: SportsIcon },
    { name: 'Eje Corporativo', time: '10 min', Icon: CorporateIcon },
    { name: 'Aeropuerto Internacional', time: '10 min', Icon: AirportIcon },
    // Oculto por pedido del cliente; descomentar (y el import de ParkIcon) para volver a mostrarlo.
    // La grilla de abajo está pensada para 4 tarjetas: con 5 hay que volver a ajustar las columnas.
    // { name: 'Parque Ñu Guazú', time: '3 min', Icon: ParkIcon },
    { name: 'Conmebol', time: '8 min', Icon: SoccerIcon },
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
          <h2 className="text-balance">
            Cerca de lo que<br />
            mueve a tu empresa
          </h2>
        </motion.div>

        {/* Location Cards - Horizontal */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10"
        >
          {locations.map((location) => {
            const Icon = location.Icon;
            return (
              <div
                key={location.name}
                className="bg-primary-blue rounded-3xl p-4 md:p-5 text-white text-center flex flex-col items-center"
              >
                <p className="text-xl md:text-2xl font-bold">{location.time}</p>
                <p className="text-xs md:text-sm mt-1 min-h-[2.5em] flex items-center">{location.name}</p>
                <Icon className="w-10 h-10 md:w-12 md:h-12 mt-3" />
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
            className="h-[280px] md:h-[400px] lg:h-[450px]"
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
