'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

type GalleryItem =
  | { type: 'video'; src: string; caption: string }
  | { type: 'image'; src: string; caption: string };

const items: GalleryItem[] = [
  { type: 'video', src: '/videos/avance-de-obra-septiembre.mp4', caption: 'Avance de obra - Mes de Septiembre' },
  { type: 'image', src: '/images/gallery/fachada-aerea.png', caption: 'Edificio Actitud - Vista aérea' },
  { type: 'image', src: '/images/gallery/palier.png', caption: 'Palier - Lobby de amenities' },
  { type: 'image', src: '/images/gallery/area-cafe.png', caption: 'Área de café y trabajo' },
  { type: 'image', src: '/images/gallery/estar-exterior.png', caption: 'Estar exterior - Terraza' },
  { type: 'image', src: '/images/gallery/quincho.png', caption: 'Quincho - Parrilla' },
  { type: 'image', src: '/images/gallery/oficina-vista.png', caption: 'Oficina ejecutiva con vista' },
];

export default function Gallery() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const prev = () => setCurrent((i) => (i - 1 + items.length) % items.length);
  const next = () => setCurrent((i) => (i + 1) % items.length);

  const item = items[current];

  return (
    <>
      <section id="galeria" className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-center mb-12">Galería</h2>

          <div className="relative md:px-14">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-deep-blue-black">
              {item.type === 'video' ? (
                <video
                  key={item.src}
                  src={item.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  autoPlay={!prefersReducedMotion}
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label={item.caption}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="absolute inset-0 w-full h-full cursor-zoom-in"
                  aria-label={`Ver imagen ampliada: ${item.caption}`}
                >
                  <Image
                    key={item.src}
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="object-cover"
                  />
                </button>
              )}
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 md:bg-transparent text-primary-blue hover:text-primary-dark-blue shadow md:shadow-none"
              aria-label="Anterior"
            >
              <svg className="w-7 h-7 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 md:bg-transparent text-primary-blue hover:text-primary-dark-blue shadow md:shadow-none"
              aria-label="Siguiente"
            >
              <svg className="w-7 h-7 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="md:px-14 mt-4 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex justify-center md:justify-start gap-2">
              {items.map((it, index) => (
                <button
                  key={it.src}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === current ? 'w-8 bg-primary-blue' : 'w-4 bg-medium-gray/30 hover:bg-medium-gray/50'
                  }`}
                  aria-label={`Ver ${it.caption}`}
                />
              ))}
            </div>
            <p className="text-center md:text-right font-semibold text-medium-gray">{item.caption}</p>
          </div>
        </div>
      </section>

      {/* Lightbox (solo imágenes) */}
      {lightbox && lightbox.type === 'image' && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 cursor-pointer"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={lightbox.src}
              alt={lightbox.caption}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white text-3xl md:text-4xl hover:text-gray-300 transition-colors p-3 hover:bg-white/10 rounded-lg"
            aria-label="Cerrar vista ampliada"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
