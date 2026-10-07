import React from 'react';
import { motion } from 'motion/react';
import { EXPLANATORY_SECTION_CONTENT } from '../../data/siteContent';
import { Button } from '../ui/Button';

interface ExplanatoryTextSectionProps {
  onOpenModal: (mode: 'plan' | 'question') => void;
}

export const ExplanatoryTextSection: React.FC<ExplanatoryTextSectionProps> = ({
  onOpenModal,
}) => {
  return (
    <section
      aria-label="Resumen de planificación"
      className="bg-white py-20 lg:py-28 border-b border-[#233975]/10"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Official Brand Symbol */}
          <div className="mx-auto w-14 h-16">
            <img
              src="/marca-grafica-pmp-simbolo-01.svg"
              alt="Símbolo Paris Magic Plan"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="font-serif text-2xl sm:text-3xl md:text-[34px] text-[#233975] leading-[1.35] font-medium">
            {EXPLANATORY_SECTION_CONTENT.text}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary-pink"
              size="lg"
              fullWidthOnMobile
              onClick={() => onOpenModal('plan')}
            >
              {EXPLANATORY_SECTION_CONTENT.primaryCta}
            </Button>

            <Button
              variant="secondary-dark"
              size="lg"
              fullWidthOnMobile
              onClick={() => onOpenModal('question')}
            >
              {EXPLANATORY_SECTION_CONTENT.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
