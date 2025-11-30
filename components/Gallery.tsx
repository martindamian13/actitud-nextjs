'use client';

import { useState } from 'react';

const images = [
  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', alt: 'Lobby' },
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'Oficina' },
  { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Terraza' },
  { url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80', alt: 'Coworking' },
  { url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', alt: 'Sala de reuniones' },
  { url: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', alt: 'Exterior' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="galeria" className="py-24 lg:py-32 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center mb-16">GALERÍA</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.url)}
                className="h-[400px] bg-cover bg-center rounded cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                style={{ backgroundImage: `url('${image.url}')` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 cursor-pointer"
        >
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
