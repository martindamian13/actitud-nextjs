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
          {/* Google Maps */}
          <div className="rounded overflow-hidden h-[500px] shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=General+Abdón+Caballero+esquina+Orlando+Salerno+Netto,+Campo+Grande,+Luque,+Paraguay&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Actitud - General Abdón Caballero esquina Orlando Salerno Netto, Campo Grande, Luque"
            />
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
