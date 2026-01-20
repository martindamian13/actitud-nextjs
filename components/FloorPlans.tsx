'use client';

import { useState } from 'react';

interface Distribution {
  id: string;
  name: string;
  description: string;
  capacity: string;
  features: string[];
}

const distributions: Distribution[] = [
  {
    id: 'open',
    name: 'Oficina Abierta',
    description: 'Espacio colaborativo tipo coworking, ideal para equipos dinámicos',
    capacity: 'Hasta 30 personas',
    features: ['Área colaborativa', 'Escritorios compartidos', 'Zona de descanso'],
  },
  {
    id: 'private',
    name: 'Oficinas Privadas',
    description: 'Espacios individuales para mayor privacidad y concentración',
    capacity: 'Hasta 20 personas',
    features: ['6-8 oficinas privadas', 'Sala de reuniones', 'Recepción'],
  },
  {
    id: 'mixed',
    name: 'Mixto',
    description: 'Combinación perfecta de espacios abiertos y privados',
    capacity: 'Hasta 25 personas',
    features: ['Área abierta central', '4 oficinas privadas', '2 salas de reuniones'],
  },
];

export default function FloorPlans() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % distributions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + distributions.length) % distributions.length);
  };

  const currentDistribution = distributions[currentSlide];

  return (
    <section id="plantas" className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-center mb-4">PLANTAS DE OFICINAS</h2>
        <p className="text-center text-xl text-medium-gray mb-12">
          Oficinas de planta libre desde 170 m² hasta 175 m²
        </p>

        {/* Carousel */}
        <div className="bg-light-gray p-4 md:p-6 lg:p-8 rounded-xl">
          {/* Carousel Container */}
          <div className="relative">
            {/* Image Placeholder */}
            <div
              className="bg-white h-[300px] md:h-[400px] lg:h-[450px] rounded-lg flex flex-col items-center justify-center relative border-4 border-accent-green"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, #E6E8EB 0px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #E6E8EB 0px, transparent 1px, transparent 20px)',
              }}
            >
              {/* Placeholder Icon */}
              <div className="mb-4">
                <svg
                  className="w-16 h-16 md:w-20 md:h-20 text-medium-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-dark-gray">{currentDistribution.name}</p>
              <p className="text-base md:text-lg text-medium-gray mt-2">174 m² • Planta Libre</p>
              <p className="text-sm text-medium-gray mt-1">{currentDistribution.capacity}</p>

              {/* Placeholder badge */}
              <div className="absolute bottom-4 left-4 bg-accent-orange/90 text-white px-3 py-1.5 rounded text-xs font-medium">
                Imagen ilustrativa próximamente
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Distribución anterior"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Siguiente distribución"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {distributions.map((dist, index) => (
              <button
                key={dist.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-accent-green scale-125'
                    : 'bg-medium-gray/40 hover:bg-medium-gray/60'
                }`}
                aria-label={`Ver ${dist.name}`}
              />
            ))}
          </div>

          {/* Distribution Info */}
          <div className="mt-6 bg-white rounded-lg p-5 md:p-6">
            <h4 className="text-xl md:text-2xl font-bold text-dark-gray mb-2">{currentDistribution.name}</h4>
            <p className="text-medium-gray mb-4">{currentDistribution.description}</p>
            <div className="flex flex-wrap gap-2">
              {currentDistribution.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-accent-green/10 text-accent-green"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-medium-gray mb-4">¿Tenés una idea de distribución?</p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white bg-accent-green hover:bg-accent-green/90 transition-all hover:scale-105"
          >
            Consultanos
          </a>
        </div>
      </div>
    </section>
  );
}
