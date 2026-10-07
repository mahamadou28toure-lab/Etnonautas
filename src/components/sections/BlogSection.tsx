import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BLOG_CONTENT, BlogArticleItem } from '../../data/siteContent';
import { ResilientImage } from '../ui/ResilientImage';
import { Button } from '../ui/Button';

interface BlogSectionProps {
  onSelectArticle: (article: BlogArticleItem) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectArticle,
}) => {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="bg-[#F8F7FC] py-24 lg:py-32 border-b border-[#233975]/10"
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
            id="blog-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#233975] leading-[1.15]"
          >
            {BLOG_CONTENT.title}
          </h2>
        </motion.div>

        {/* Blog Featured Articles Grid (CMS-ready structure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_CONTENT.articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl bg-white border border-[#233975]/12 hover:border-[#EC4689]/60 overflow-hidden flex flex-col justify-between transition-colors duration-200"
            >
              <div>
                {/* Article Image */}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <ResilientImage
                    src={article.image}
                    alt={article.imageAlt}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Article Content */}
                <div className="p-7 space-y-3.5">
                  {/* Unboxed Metadata: Category · Date (Zero-Pill Discipline) */}
                  <div className="flex items-center gap-2 text-xs text-[#8D3B82] font-medium">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-semibold text-[#233975] leading-snug group-hover:text-[#EC4689] transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[#233975]/75 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Button */}
              <div className="px-7 pb-7 pt-2">
                <Button
                  variant="secondary-dark"
                  size="sm"
                  onClick={() => onSelectArticle(article)}
                >
                  <span>{article.readButtonLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#EC4689]" aria-hidden="true" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
