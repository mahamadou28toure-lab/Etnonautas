import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQ_CONTENT } from '../../data/siteContent';
import { Button } from '../ui/Button';

interface FaqSectionProps {
  onOpenQuestionModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenQuestionModal,
}) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_CONTENT.items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="preguntas-frecuentes"
      aria-labelledby="faq-heading"
      className="bg-white py-24 lg:py-32"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-16 space-y-4"
        >
          <div
            className="mx-auto w-14 h-1 rounded-full bg-gradient-to-r from-[#EC4689] to-[#233975]"
            aria-hidden="true"
          />
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#233975] leading-[1.15]"
          >
            {FAQ_CONTENT.title}
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_CONTENT.items.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const triggerId = `faq-trigger-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#F8F7FC] border border-dashed border-[#EC4689]/50 overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-serif text-xl font-semibold text-[#233975] hover:text-[#EC4689] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#EC4689]"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#EC4689] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="px-6 pb-6 pt-1 text-base text-[#233975]/80 leading-relaxed border-t border-[#233975]/10"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Question Action */}
        <div className="mt-12 text-center">
          <Button
            variant="secondary-dark"
            size="md"
            onClick={onOpenQuestionModal}
          >
            Pregunta cualquier duda
          </Button>
        </div>
      </div>
    </section>
  );
};
