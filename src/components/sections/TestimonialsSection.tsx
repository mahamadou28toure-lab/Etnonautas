import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_CONTENT } from '../../data/siteContent';
import { ResilientImage } from '../ui/ResilientImage';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="opiniones"
      aria-labelledby="testimonials-heading"
      className="bg-white py-24 lg:py-32"
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
          <div
            className="mx-auto w-14 h-1 rounded-full bg-gradient-to-r from-[#EC4689] to-[#233975]"
            aria-hidden="true"
          />
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#233975] leading-[1.15]"
          >
            {TESTIMONIALS_CONTENT.title}
          </h2>
        </motion.div>

        {/* Exactly 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TESTIMONIALS_CONTENT.items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl bg-[#F8F7FC] border border-dashed border-[#EC4689]/50 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <ResilientImage
                    src={item.image}
                    alt={item.imageAlt}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Visual Rating (5 Stars in PMP Pink) */}
                  <div
                    className="flex items-center gap-1"
                    aria-label={`Valoración: ${item.rating} de 5 estrellas`}
                  >
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="w-4 h-4 fill-[#EC4689] text-[#EC4689]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Opinion (Placeholder clearly identified) */}
                  <blockquote className="text-sm text-[#233975]/80 leading-relaxed italic">
                    “{item.opinion}”
                  </blockquote>
                </div>
              </div>

              {/* Name Footer */}
              <div className="px-6 py-4 bg-white border-t border-[#233975]/10">
                <p className="font-serif text-base font-semibold text-[#233975]">
                  {item.name}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
