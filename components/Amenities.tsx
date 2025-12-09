'use client';

import { motion } from 'framer-motion';
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
  { title: 'Espacios comunes climatizados', Icon: ClimateControlIcon },
  { title: 'Conexiones para A/C tipo Casette', Icon: PowerPlugIcon },
  { title: 'Ascensor de alta velocidad', Icon: ElevatorIcon },
  { title: 'Terraza', Icon: TerraceIcon },
  { title: 'Transformador propio', Icon: TransformerIcon },
  { title: 'Estacionamiento asignado', Icon: ParkingIcon },
  { title: 'CCTV en espacios comunes', Icon: CCTVIcon },
  { title: 'WiFi en espacios comunes', Icon: WiFiIcon },
  { title: 'Generador propio', Icon: GeneratorIcon },
  { title: 'Sanitarios con accesibilidad', Icon: AccessibilityIcon },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 lg:py-32 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center mb-16">AMENITIES ÚNICAS EN EL MERCADO CORPORATIVO</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.Icon;
            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4 text-primary-blue">
                  <Icon className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-semibold text-dark-gray">{amenity.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
