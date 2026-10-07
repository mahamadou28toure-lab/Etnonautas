import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  BadgeEuro,
  Castle,
  Utensils,
  Smartphone,
  CalendarClock,
  Building2,
  LifeBuoy,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { ADVANTAGES_CONTENT, AdvantageItem } from '../../data/siteContent';

const renderAdvantageIcon = (
  iconName: AdvantageItem['iconName'],
  isCorporateCard: boolean
) => {
  const iconClass = `w-6 h-6 stroke-[1.75] ${
    isCorporateCard ? 'text-[#EC4689]' : 'text-[#EC4689]'
  }`;
  switch (iconName) {
    case 'compass':
      return <Compass className={iconClass} aria-hidden="true" />;
    case 'badge-euro':
      return <BadgeEuro className={iconClass} aria-hidden="true" />;
    case 'castle':
      return <Castle className={iconClass} aria-hidden="true" />;
    case 'utensils':
      return <Utensils className={iconClass} aria-hidden="true" />;
    case 'smartphone':
      return <Smartphone className={iconClass} aria-hidden="true" />;
    case 'calendar-clock':
      return <CalendarClock className={iconClass} aria-hidden="true" />;
    case 'building':
      return <Building2 className={iconClass} aria-hidden="true" />;
    case 'life-buoy':
      return <LifeBuoy className={iconClass} aria-hidden="true" />;
    case 'shield-check':
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case 'wallet':
      return <Wallet className={iconClass} aria-hidden="true" />;
  }
};

export const AdvantagesSection: React.FC = () => {
  return (
    <section
      id="ventajas"
      aria-labelledby="advantages-heading"
      className="bg-white py-24 lg:py-32 border-y border-[#233975]/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4"
        >
          <div className="mx-auto w-14 h-16">
            <img
              src="/marca-grafica-pmp-simbolo-01.svg"
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
          <h2
            id="advantages-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#233975] leading-[1.15]"
          >
            {ADVANTAGES_CONTENT.title}
          </h2>
        </motion.div>

        {/* Asymmetric Editorial Bento Grid for the 10 Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {ADVANTAGES_CONTENT.items.map((item, index) => {
            const isTopFeatured = index === 0 || index === 1;
            const isBottomWide = index === 8 || index === 9;
            const colSpanClass =
              isTopFeatured || isBottomWide
                ? 'lg:col-span-6'
                : 'lg:col-span-4';

            const isCorporateCard = index === 0 || index === 9;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${colSpanClass} rounded-2xl p-7 sm:p-8 transition-colors duration-200 flex flex-col justify-between ${
                  isCorporateCard
                    ? 'bg-pmp-corporate text-white border border-white/20 shadow-md'
                    : 'bg-[#F8F7FC] text-[#233975] border border-[#233975]/12 hover:border-[#EC4689]/60'
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isCorporateCard
                          ? 'bg-white shadow-xs'
                          : 'bg-white border border-[#EC4689]/25'
                      }`}
                    >
                      {renderAdvantageIcon(item.iconName, isCorporateCard)}
                    </div>
                    <span
                      className={`font-serif text-sm font-semibold tabular-nums ${
                        isCorporateCard ? 'text-white/75' : 'text-[#8D3B82]/60'
                      }`}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-2xl sm:text-[26px] font-semibold leading-snug ${
                      isCorporateCard ? 'text-white' : 'text-[#233975]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-base leading-relaxed tabular-nums ${
                      isCorporateCard ? 'text-white/90' : 'text-[#233975]/80'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
