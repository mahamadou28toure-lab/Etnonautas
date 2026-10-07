import React from 'react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS_CONTENT } from '../../data/siteContent';

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-it-works-heading"
      className="bg-pmp-corporate text-white py-24 lg:py-32 border-b border-white/15"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4"
        >
          <div className="mx-auto w-14 h-1 rounded-full bg-[#EC4689]" aria-hidden="true" />
          <h2
            id="how-it-works-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.15]"
          >
            {HOW_IT_WORKS_CONTENT.title}
          </h2>
        </motion.div>

        {/* Four Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative rounded-2xl p-7 sm:p-8 bg-white/12 backdrop-blur-md border border-white/25 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white font-serif text-xl font-bold text-[#EC4689] tabular-nums shadow-xs">
                    0{step.number}
                  </span>
                  {index < HOW_IT_WORKS_CONTENT.steps.length - 1 && (
                    <div
                      className="hidden lg:block w-12 h-0.5 bg-gradient-to-r from-white/50 to-transparent"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-white leading-snug">
                  {step.title}
                </h3>

                <p className="text-base text-white/85 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
