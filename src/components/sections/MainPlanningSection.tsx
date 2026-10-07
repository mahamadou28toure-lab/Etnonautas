import React from 'react';
import { motion } from 'motion/react';
import { MAIN_PLANNING_CONTENT, IMAGES } from '../../data/siteContent';
import { ResilientImage } from '../ui/ResilientImage';

export const MainPlanningSection: React.FC = () => {
  return (
    <section
      id="disneyland-paris"
      aria-labelledby="main-planning-heading"
      className="bg-[#F8F7FC] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Copy Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div
              className="w-14 h-1 rounded-full bg-gradient-to-r from-[#EC4689] to-[#233975]"
              aria-hidden="true"
            />

            <h2
              id="main-planning-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#233975] leading-[1.15]"
            >
              {MAIN_PLANNING_CONTENT.title}
            </h2>

            <p className="text-base sm:text-lg text-[#233975]/85 leading-relaxed max-w-2xl">
              {MAIN_PLANNING_CONTENT.text1}
            </p>

            <div className="pt-6 border-t border-[#233975]/15 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#8D3B82] leading-[1.25]">
                {MAIN_PLANNING_CONTENT.subtitle}
              </h3>

              <p className="text-base sm:text-lg text-[#233975]/80 leading-relaxed max-w-2xl">
                {MAIN_PLANNING_CONTENT.text2}
              </p>
            </div>
          </motion.div>

          {/* Editorial Photography Column + Official Brand Seal (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#EC4689]/30 shadow-lg aspect-[4/3] lg:aspect-[4/5]">
              <ResilientImage
                src={IMAGES.planningDetail}
                alt="Planificación detallada de itinerario para Disneyland Paris"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#233975]/55 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-md">
                <img
                  src="/marca-grafica-pmp-simple-04.svg"
                  alt="Paris Magic Plan"
                  referrerPolicy="no-referrer"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
