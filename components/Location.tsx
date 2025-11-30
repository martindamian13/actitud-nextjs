'use client';

export default function Location() {
  const locations = [
    { name: 'Eje corporativo', time: '10 minutos', icon: '🏢' },
    { name: 'Aeropuerto', time: '10 minutos', icon: '✈️' },
    { name: 'Ñu Guazú', time: '3 minutos', icon: '🏞️' },
    { name: 'CIT', time: '3 minutos', icon: '🎾' },
    { name: 'Conmebol', time: '8 minutos', icon: '⚽' },
  ];

  return (
    <section id="ubicacion" className="py-24 lg:py-32 bg-gradient-blue text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center mb-16 text-white">UBICACIÓN ESTRATÉGICA</h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Placeholder */}
          <div className="bg-white/10 rounded h-[500px] flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-xl font-semibold">Actitud</p>
              <p className="text-sm opacity-75">Gral. Abdón Caballero</p>
            </div>
          </div>

          {/* Location Info */}
          <div className="grid grid-cols-2 gap-8">
            {locations.map((location) => (
              <div key={location.name} className="text-center">
                <div className="text-5xl mb-4">{location.icon}</div>
                <p className="text-sm opacity-90">A {location.time} del</p>
                <p className="text-xl font-bold mt-1">{location.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
