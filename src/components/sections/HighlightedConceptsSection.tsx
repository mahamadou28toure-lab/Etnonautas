import React from 'react';
import { motion } from 'motion/react';
import { Compass, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { HIGHLIGHTED_CONCEPTS, HighlightedConcept } from '../../data/siteContent';

const renderConceptIcon = (iconName: HighlightedConcept['iconName']) => {
  const iconClass = 'w-6 h-6 text-[#EC4689] stroke-[1.75]';
  switch (iconName) {
    case 'compass':
      return <Compass className={iconClass} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case 'tag':
      return <Tag className={iconClass} aria-hidden="true" />;
    case 'sparkles':
      return <Sparkles className={iconClass} aria-hidden="true" />;
  }
};

export const HighlightedConceptsSection: React.FC = () => {
  return (
    <section
      aria-label="Conceptos destacados"
      className="relative z-20 bg-pmp-corporate border-y border-white/15 py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HIGHLIGHTED_CONCEPTS.map((concept, index) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/12 backdrop-blur-md border border-white/20"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs">
                {renderConceptIcon(concept.iconName)}
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-semibold text-white leading-snug">
                {concept.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
