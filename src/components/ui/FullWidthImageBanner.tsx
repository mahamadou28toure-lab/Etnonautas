import React from 'react';
import { motion } from 'motion/react';
import { ResilientImage } from './ResilientImage';
import { Button } from './Button';

interface FullWidthImageBannerProps {
  id?: string;
  imageSrc: string;
  imageAlt: string;
  quote: string;
  subHeadline1?: string;
  subHeadline2?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  isClosingSection?: boolean;
}

export const FullWidthImageBanner: React.FC<FullWidthImageBannerProps> = ({
  id,
  imageSrc,
  imageAlt,
  quote,
  subHeadline1,
  subHeadline2,
  ctaLabel,
  onCtaClick,
  isClosingSection = false,
}) => {
  return (
    <section
      id={id}
      aria-label={quote}
      className={`relative w-full overflow-hidden ${
        isClosingSection
          ? 'min-h-[520px] sm:min-h-[580px] md:min-h-[680px]'
          : 'min-h-[380px] sm:min-h-[440px] md:min-h-[540px]'
      } flex items-center justify-center`}
    >
      {/* Full-bleed Background Photography */}
      <ResilientImage
        src={imageSrc}
        alt={imageAlt}
        containerClassName="absolute inset-0 w-full h-full"
        className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
      />

      {/* Balanced Corporate Scrim for Photography Clarity & Text Legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#233975]/85 via-[#4E3579]/55 to-[#8D3B82]/45"
        aria-hidden="true"
      />

      {/* Subtle top and bottom corporate pink/blue hairline borders */}
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#233975] via-[#EC4689] to-[#233975]"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Decorative corporate pink line */}
          <div
            className="mx-auto w-14 h-1 rounded-full bg-[#EC4689]"
            aria-hidden="true"
          />

          {isClosingSection ? (
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-white leading-[1.15] tracking-wide max-w-4xl mx-auto drop-shadow-sm">
              {quote}
            </h2>
          ) : (
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-medium italic text-white leading-[1.22] tracking-wide max-w-4xl mx-auto drop-shadow-sm">
              “{quote}”
            </blockquote>
          )}

          {(subHeadline1 || subHeadline2) && (
            <div className="pt-2 space-y-3 max-w-2xl mx-auto">
              {subHeadline1 && (
                <p className="font-serif text-xl sm:text-2xl text-[#FCE7F3] font-medium tracking-wide">
                  {subHeadline1}
                </p>
              )}
              {subHeadline2 && (
                <p className="text-base sm:text-lg text-white/95 leading-relaxed">
                  {subHeadline2}
                </p>
              )}
            </div>
          )}

          {ctaLabel && onCtaClick && (
            <div className="pt-6">
              <Button
                variant="primary-pink"
                size="lg"
                onClick={onCtaClick}
                fullWidthOnMobile
                className="font-semibold tracking-wider px-10"
              >
                {ctaLabel}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
