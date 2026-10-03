'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface Possibility {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
  /** Side of the section where the title card sits */
  align: 'left' | 'right';
  /** Render with rounded corners (false for cut-out images with transparent background) */
  rounded: boolean;
}

const possibilities: Possibility[] = [
  {
    id: 'clinic',
    title: 'Consultorio médico',
    image: '/images/plantas/consultorio.png',
    width: 1536,
    height: 1024,
    align: 'left',
    rounded: true,
  },
  {
    id: 'corporate',
    title: 'Oficinas corporativas',
    image: '/images/plantas/oficinas-isometrico.png',
    width: 1125,
    height: 710,
    align: 'right',
    rounded: false,
  },
  {
    id: 'callcenter',
    title: 'Call center',
    image: '/images/plantas/call-center.png',
    width: 1536,
    height: 1024,
    align: 'left',
    rounded: true,
  },
];

export default function FloorPlans() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <section id="plantas" className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.h2 {...fadeUp} className="text-center mb-12 text-balance">
          Imaginá las posibilidades de<br />
          tu oficina.
        </motion.h2>

        {/* Floor plan */}
        <motion.div {...fadeUp}>
          <Image
            src="/images/plantas/plano-planta-libre.png"
            alt="Plano de planta libre con medidas"
            width={2241}
            height={686}
            className="w-full h-auto"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <p className="text-lg md:text-xl text-dark-gray mt-6 max-w-md">
            Hasta 190 m² de planta libre para diseñar el espacio que tu empresa necesita
          </p>
        </motion.div>

        {/* Delivery state */}
        <motion.div {...fadeUp} className="mt-16 md:mt-24">
          <p className="text-right text-lg md:text-xl text-dark-gray mb-4">
            Así <strong className="text-primary-blue">recibís</strong> tu planta:
          </p>
          <div className="relative aspect-[16/9] md:aspect-[2.15/1] rounded-3xl overflow-hidden">
            <Image
              src="/images/plantas/planta-libre-entrega.png"
              alt="Planta libre tal como se entrega"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          <p className="text-lg md:text-xl text-dark-gray mt-4">
            Y la adaptás según <strong className="text-primary-blue">tu rubro</strong>...
          </p>
        </motion.div>

        {/* Examples */}
        <div className="mt-16 md:mt-24 space-y-16 md:space-y-24">
          {possibilities.map((item) => (
            <motion.div
              key={item.id}
              {...fadeUp}
              className={`relative max-w-3xl ${item.align === 'right' ? 'ml-auto' : 'mr-auto'}`}
            >
              {/* Title card (sits behind the image) */}
              <div
                className={`absolute top-0 w-1/2 h-[70%] bg-primary-blue rounded-3xl p-5 md:p-8 ${
                  item.align === 'right' ? 'right-0 text-right' : 'left-0 text-left'
                }`}
              >
                <h3 className="font-sans font-light uppercase text-white text-lg md:text-2xl leading-tight">
                  {item.title}
                </h3>
              </div>

              <div
                className={`relative pt-20 md:pt-28 ${
                  item.align === 'right' ? 'pr-8 md:pr-14' : 'pl-8 md:pl-14'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className={`w-full h-auto ${item.rounded ? 'rounded-3xl' : ''}`}
                  sizes="(max-width: 768px) 90vw, 768px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs md:text-sm text-dark-gray mt-12 max-w-3xl mx-auto">
          Imágenes referenciales. Las oficinas se entregan en planta libre. La distribución, adecuación, mobiliario y equipamiento quedan a cargo de cada empresa
        </p>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-dark-gray mb-4">¿Tenés una idea de distribución?</p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white bg-primary-blue hover:bg-primary-dark-blue transition-all hover:scale-105"
          >
            Consultanos
          </a>
        </div>
      </div>
    </section>
  );
}
