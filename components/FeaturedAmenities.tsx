'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const amenities = [
  {
    title: 'Coworking',
    subtitle: 'Espacios de trabajo compartido',
    image: '/images/amenities/coworking.png',
  },
  {
    title: 'Sala de Conferencias',
    subtitle: 'Capacitaciones y presentaciones',
    image: '/images/amenities/conferencias.png',
  },
  {
    title: 'Sala de Reuniones',
    subtitle: 'Encuentros ejecutivos',
    image: '/images/amenities/reuniones.png',
  },
  {
    title: 'The Rooftop',
    subtitle: 'Terraza y quincho',
    image: '/images/amenities/rooftop.png',
  },
];

// Rótulos del plano de amenities. Las coordenadas están en el espacio del SVG (2000 x 899),
// que coincide con las proporciones de planta-amenities.png (2398 x 1078).
// Cada rótulo tiene el texto, su posición y una o más líneas punteadas hacia el ambiente.
const planLabels: { text: string; x: number; y: number; paths: string[] }[] = [
  { text: 'Sala de reuniones', x: 190, y: 105, paths: ['M 270 120 L 372 152'] },
  { text: 'Sala de conferencias', x: 640, y: 34, paths: ['M 600 52 L 600 190'] },
  { text: 'Sanitarios', x: 975, y: 150, paths: ['M 955 168 L 835 270', 'M 1000 168 L 1175 318'] },
  { text: 'Vestidores', x: 1260, y: 215, paths: ['M 1260 234 L 1260 395'] },
  { text: 'Parrilla', x: 1470, y: 130, paths: ['M 1450 150 L 1400 395'] },
  { text: 'Rooftop - Terraza', x: 1740, y: 330, paths: ['M 1700 350 L 1630 520'] },
  { text: 'Rooftop - Terraza', x: 160, y: 650, paths: ['M 200 630 L 385 345'] },
  { text: 'Coworking', x: 420, y: 765, paths: ['M 500 748 L 700 748 L 700 445'] },
  { text: 'The Studio - Salón multiuso', x: 880, y: 795, paths: ['M 1100 778 L 1240 778 L 1240 612'] },
];

const legend = [
  'Sala de reuniones',
  'Sala de conferencias',
  'Sanitarios',
  'Vestidores',
  'Parrilla',
  'Rooftop - Terraza',
  'Coworking',
  'The Studio - Salón multiuso',
];

export default function FeaturedAmenities() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-right mb-6 md:mb-0"
        >
          <h2>100% equipados</h2>
          <p className="text-sm md:text-base font-semibold text-dark-gray mt-2">
            Únicos en el mercado corporativo.
          </p>
        </motion.div>

        {/* Amenities floor plan with labels */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-12 md:mb-20"
        >
          <Image
            src="/images/amenities/planta-amenities.png"
            alt="Planta de amenities: sala de reuniones, sala de conferencias, coworking, sanitarios, vestidores, parrilla, rooftop y The Studio"
            width={2398}
            height={1078}
            className="w-full h-auto"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <svg
            viewBox="0 0 2000 899"
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <marker id="plan-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#797676" />
              </marker>
            </defs>
            {planLabels.map((label) => (
              <g key={`${label.text}-${label.x}`}>
                {label.paths.map((d) => (
                  <path
                    key={d}
                    d={d}
                    fill="none"
                    stroke="#797676"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="1 14"
                    markerEnd="url(#plan-arrow)"
                  />
                ))}
                <text
                  x={label.x}
                  y={label.y}
                  textAnchor="middle"
                  fill="#797676"
                  fontSize="30"
                  fontWeight="300"
                  style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}
                >
                  {label.text}
                </text>
              </g>
            ))}
          </svg>

          {/* Mobile legend (the labels above are too small on narrow screens) */}
          <ul className="md:hidden flex flex-wrap justify-center gap-2 mt-4">
            {legend.map((item) => (
              <li
                key={item}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary-blue/10 text-primary-blue"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] rounded-xl overflow-hidden group cursor-default"
            >
              <Image
                src={amenity.image}
                alt={amenity.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-6">
                <h3 className="font-sans font-bold text-xl md:text-2xl text-white">{amenity.title}</h3>
                <p className="text-sm text-white/80 mt-1">{amenity.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
