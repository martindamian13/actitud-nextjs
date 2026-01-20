'use client';

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
  const locations = [
    { name: 'Eje corporativo', time: '10 minutos', article: 'del', Icon: CorporateIcon },
    { name: 'Aeropuerto', time: '10 minutos', article: 'del', Icon: AirportIcon },
    { name: 'Parque Ñu Guazú', time: '3 minutos', article: 'del', Icon: ParkIcon },
    { name: 'CIT', time: '3 minutos', article: 'del', Icon: SportsIcon },
    { name: 'Conmebol', time: '8 minutos', article: 'de la', Icon: SoccerIcon },
  ];

  return (
    <section id="ubicacion" className="py-24 lg:py-32 bg-gradient-blue text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center mb-16 text-white">UBICACIÓN ESTRATÉGICA</h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Google Maps */}
          <div className="rounded overflow-hidden shadow-xl relative">
            <LazyIframe
              src="https://www.google.com/maps?q=General+Abdón+Caballero+esquina+Orlando+Salerno+Netto,+Campo+Grande,+Luque,+Paraguay&output=embed&z=16"
              title="Ubicación Actitud - General Abdón Caballero esquina Orlando Salerno Netto, Campo Grande, Luque"
              height="500px"
              allowFullScreen={true}
              className="h-[500px]"
            />
            {/* Mobile overlay - opens Google Maps for directions */}
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
          </div>

          {/* Location Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {locations.map((location) => {
              const Icon = location.Icon;
              return (
                <div key={location.name} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <p className="text-base md:text-sm opacity-90">A {location.time} {location.article}</p>
                  <p className="text-xl md:text-2xl font-bold mt-1">{location.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
