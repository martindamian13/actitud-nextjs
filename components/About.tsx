'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="edificio" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8">
              DONDE LA PRODUCTIVIDAD Y EL<br />
              BIENESTAR SE ENCUENTRAN
            </h2>
            <div className="space-y-6 text-lg">
              <p>
                <span className="font-bold text-deep-blue-black">El Edificio Corporativo Actitud</span> redefine el concepto de espacios de trabajo.
              </p>
              <p>
                Diseñado para empresas que buscan proyección y confort, cuenta con 6 niveles de oficinas de planta libre —desde 170 m² hasta 175 m²— más un piso exclusivo de amenities; coworking, sala de conferencias, sala de reuniones, salón multiuso, parrilla, terraza y todas las comodidades en espacios comunes.
              </p>
              <p>
                Un entorno moderno, funcional y de alto nivel, pensado para potenciar el rendimiento y la imagen corporativa.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
            viewport={{ once: true }}
            className="h-[300px] md:h-[400px] lg:h-[600px] rounded bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80')"
            }}
          />
        </div>
      </div>
    </section>
  );
}
