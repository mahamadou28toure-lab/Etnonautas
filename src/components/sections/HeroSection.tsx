import React from 'react';
import { motion } from 'motion/react';
import { HERO_CONTENT, IMAGES } from '../../data/siteContent';
import { ResilientImage } from '../ui/ResilientImage';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onOpenModal: (mode: 'plan' | 'question') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-[88vh] lg:min-h-[92vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background Hero Image */}
      <ResilientImage
        src={IMAGES.heroCastle}
        alt="Castillo de Disneyland Paris iluminado al anochecer"
        priority
        containerClassName="absolute inset-0 w-full h-full"
        className="w-full h-full object-cover object-center"
      />

      {/* Corporate Gradient Scrim inspired by Fondo corporativo horizontal.png */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#8D3B82]/75 via-[#4E3579]/70 to-[#233975]/88"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 md:space-y-8"
        >
          {/* Official PMP Symbol Badge */}
          <div className="mx-auto w-16 h-20 rounded-2xl bg-white p-2 shadow-lg flex items-center justify-center">
            <img
              src="/marca-grafica-pmp-simbolo-01.svg"
              alt="Símbolo Paris Magic Plan"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>

          {/* H1 Title */}
          <h1
            id="hero-heading"
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold text-white leading-[1.08] tracking-wide max-w-4xl mx-auto"
          >
            {HERO_CONTENT.title}
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-2xl sm:text-3xl md:text-[34px] italic text-[#FCE7F3] leading-[1.25] max-w-3xl mx-auto">
            {HERO_CONTENT.subtitle}
          </p>

          {/* Explanatory Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto font-normal">
            {HERO_CONTENT.text}
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary-pink"
              size="lg"
              fullWidthOnMobile
              onClick={() => onOpenModal('plan')}
              className="font-semibold"
            >
              {HERO_CONTENT.primaryCta}
            </Button>

            <Button
              variant="secondary-light"
              size="lg"
              fullWidthOnMobile
              onClick={() => onOpenModal('question')}
            >
              {HERO_CONTENT.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
