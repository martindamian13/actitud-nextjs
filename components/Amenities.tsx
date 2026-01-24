'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import {
  MeetingRoomIcon,
  ConferenceIcon,
  ClimateControlIcon,
  PowerPlugIcon,
  ElevatorIcon,
  TerraceIcon,
  TransformerIcon,
  ParkingIcon,
  CCTVIcon,
  WiFiIcon,
  GeneratorIcon,
  AccessibilityIcon,
} from '@/components/icons/AmenityIcons';

const amenities = [
  { title: 'Sala de reuniones', Icon: MeetingRoomIcon },
  { title: 'Sala de conferencias', Icon: ConferenceIcon },
  { title: 'Espacios climatizados', Icon: ClimateControlIcon },
  { title: 'A/C tipo Casette', Icon: PowerPlugIcon },
  { title: 'Ascensor de alta velocidad', Icon: ElevatorIcon },
  { title: 'Terraza', Icon: TerraceIcon },
  { title: 'Transformador propio', Icon: TransformerIcon },
  { title: 'Estacionamiento asignado', Icon: ParkingIcon },
  { title: 'CCTV', Icon: CCTVIcon },
  { title: 'WiFi en espacios comunes', Icon: WiFiIcon },
  { title: 'Generador propio', Icon: GeneratorIcon },
  { title: 'Sanitarios accesibles', Icon: AccessibilityIcon },
];

export default function Amenities() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="amenities" className="py-16 lg:py-20 bg-white border-t border-light-gray">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-xl md:text-2xl font-bold text-dark-gray mb-8">
            Amenities incluidos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
            {amenities.map((amenity) => {
              const Icon = amenity.Icon;
              return (
                <div key={amenity.title} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-accent-green flex-shrink-0" />
                  <span className="text-sm text-dark-gray">{amenity.title}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
