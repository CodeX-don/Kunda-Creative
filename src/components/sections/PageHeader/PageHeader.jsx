import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { OptimizedImage } from '@components/ui';

/**
 * PageHeader — page hero block.
 *
 * Variants:
 * - default: balanced two-column with simple rounded image.
 * - editorial: zine treatment for the About page — 5/7 split,
 *   image overlapping the text, polaroid frame with tape detail
 *   that straightens on hover.
 * - offset: print treatment for the Services page — 50/50 split,
 *   sharp 1px burgundy frame, image shifted upward, typewriter
 *   tag label.
 */
const PageHeader = ({
  heading,
  subheading,
  bgColor = 'transparent',
  image,
  imageAlt,
  variant = 'default',
}) => {
  const editorial = variant === 'editorial';
  const offset = variant === 'offset';
  const eyebrowText = heading === 'OUR SERVICES' ? 'Three pillars' : 'Our story';

  return (
    <Section spacing="large" bgColor={bgColor} className="relative overflow-hidden">
      <Container>
        <div
          className={`grid gap-12 items-center ${
            editorial ? 'grid-cols-1 lg:grid-cols-12 lg:gap-8' : 'lg:grid-cols-2 lg:gap-20'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={editorial ? 'lg:col-span-5 relative z-10 lg:pr-8' : 'max-w-4xl'}
          >
            {offset ? (
              <span className="inline-flex items-center gap-2 border border-burgundy/40 px-3 py-1 mb-4 font-mono text-label text-olive uppercase tracking-wider">
                <span className="w-2 h-2 bg-burgundy" aria-hidden="true" />
                {eyebrowText}
              </span>
            ) : (
              <span
                className={`font-mono text-label text-olive uppercase tracking-wider mb-4 ${
                  editorial ? 'border-b border-burgundy/30 pb-1 mb-6 inline-block' : 'block'
                }`}
              >
                {eyebrowText}
              </span>
            )}
            <h1 className="font-serif text-h1 text-burgundy leading-tight mb-4">{heading}</h1>
            {subheading && (
              <p className="font-mono text-body-lg text-charcoal/70">{subheading}</p>
            )}
          </motion.div>

          {image &&
            (editorial ? (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="lg:col-span-7 relative mt-8 lg:mt-0"
              >
                <div className="relative bg-cream-light p-3 lg:p-4 rotate-1 shadow-[4px_4px_0px_rgba(122,59,59,0.1)] transition-transform duration-500 hover:rotate-0 hover:shadow-[6px_6px_0px_rgba(122,59,59,0.15)]">
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-cream/70 border border-burgundy/10 rotate-1 z-20"
                    aria-hidden="true"
                  />
                  <OptimizedImage
                    src={image}
                    alt={imageAlt || ''}
                    className="w-full [filter:sepia(10%)_saturate(90%)_contrast(95%)]"
                    priority
                    sizes="(max-width: 767px) 100vw, 60vw"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className={`relative aspect-[4/3] overflow-hidden ${
                  offset
                    ? 'border border-burgundy shadow-[4px_4px_0_rgba(122,59,59,0.15)] lg:-mt-12'
                    : 'rounded-lg'
                }`}
              >
                <OptimizedImage
                  src={image}
                  alt={imageAlt || ''}
                  className="w-full h-full [filter:sepia(10%)_saturate(90%)]"
                  priority
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-grain-subtle opacity-10"
                  aria-hidden="true"
                />
              </motion.div>
            ))}
        </div>
      </Container>
    </Section>
  );
};

export default PageHeader;
