'use client';

const amenities = [
  {
    title: 'COWORKING',
    description: 'Un ambiente flexible y luminoso con estaciones de trabajo equipadas con tomas integradas y biombos decorativos con vegetación. Incluye área de café con mesada de granito, WiFi de alta velocidad, impresora, frigobar y espacios de almacenamiento.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
  },
  {
    title: 'SALA DE CONFERENCIAS',
    description: 'Un espacio preparado para presentaciones, capacitaciones y reuniones de gran escala. Equipada con proyector láser FHD, pantalla retráctil eléctrica de 150", sistema de sonido envolvente, micrófonos, WiFi de alta velocidad, y mobiliario ergonómico.',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80',
  },
  {
    title: 'SALA DE REUNIONES',
    description: 'Diseñada para encuentros ejecutivos con tecnología integrada. Cuenta con TV, sistema de videoconferencias, panel de notas de vidrio, mesa central con puertos eléctricos y de conexión, además de sillas ergonómicas.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
  },
  {
    title: 'THE ROOFTOP',
    description: 'Un espacio al aire libre diseñado para la interacción y el networking. El lugar perfecto para eventos empresariales o celebraciones, donde el trabajo se transforma en experiencia y las relaciones se fortalecen en un entorno único.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
];

export default function FeaturedAmenities() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center mb-20 text-white">AMENITIES 100% EQUIPADOS</h2>

        <div className="space-y-12 md:space-y-16 lg:space-y-24">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className={`grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`h-[250px] md:h-[350px] lg:h-[500px] bg-cover bg-center rounded shadow-2xl ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
                style={{ backgroundImage: `url('${amenity.image}')` }}
              />
              <div className={`bg-white/10 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-black mb-4 md:mb-6 text-white">{amenity.title}</h3>
                <p className="text-base md:text-lg leading-relaxed opacity-90">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
