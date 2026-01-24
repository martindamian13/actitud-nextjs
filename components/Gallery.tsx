'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  { url: '/images/gallery/fachada-aerea.png', alt: 'Edificio Actitud - Vista aérea' },
  { url: '/images/gallery/palier.png', alt: 'Palier - Lobby de amenities' },
  { url: '/images/gallery/area-cafe.png', alt: 'Área de café y trabajo' },
  { url: '/images/gallery/estar-exterior.png', alt: 'Estar exterior - Terraza' },
  { url: '/images/gallery/quincho.png', alt: 'Quincho - Parrilla' },
  { url: '/images/gallery/oficina-vista.png', alt: 'Oficina ejecutiva con vista' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  return (
    <>
      <section id="galeria" className="py-24 lg:py-32 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center mb-16">GALERÍA</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="relative h-[250px] md:h-[300px] lg:h-[400px] rounded cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedImage(image);
                  }
                }}
                aria-label={`Ver imagen ampliada: ${image.alt}`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 cursor-pointer"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage.url}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded"
            aria-label="Cerrar vista ampliada"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
