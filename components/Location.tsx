'use client';

import {
  CorporateIcon,
  AirportIcon,
  ParkIcon,
  SportsIcon,
  SoccerIcon,
  MapPinIcon,
} from '@/components/icons/LocationIcons';

export default function Location() {
  const locations = [
    { name: 'Eje corporativo', time: '10 minutos', Icon: CorporateIcon },
    { name: 'Aeropuerto', time: '10 minutos', Icon: AirportIcon },
    { name: 'Ñu Guazú', time: '3 minutos', Icon: ParkIcon },
    { name: 'CIT', time: '3 minutos', Icon: SportsIcon },
    { name: 'Conmebol', time: '8 minutos', Icon: SoccerIcon },
  ];

  return (
    <section id="ubicacion" className="py-24 lg:py-32 bg-gradient-blue text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center mb-16 text-white">UBICACIÓN ESTRATÉGICA</h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Placeholder */}
          <div className="bg-white/10 rounded h-[500px] flex items-center justify-center backdrop-blur-sm">
            <div className="text-center px-6">
              <div className="flex justify-center mb-4">
                <MapPinIcon className="w-20 h-20" />
              </div>
              <p className="text-2xl font-bold mb-2">Actitud</p>
              <p className="text-sm opacity-90 leading-relaxed">General Abdón Caballero esquina<br />Orlando Salerno Netto</p>
              <p className="text-sm opacity-75 mt-1">Campo Grande, Luque</p>
            </div>
          </div>

          {/* Location Info */}
          <div className="grid grid-cols-2 gap-8">
            {locations.map((location) => {
              const Icon = location.Icon;
              return (
                <div key={location.name} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-16 h-16" />
                  </div>
                  <p className="text-sm opacity-90">A {location.time} del</p>
                  <p className="text-xl font-bold mt-1">{location.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
