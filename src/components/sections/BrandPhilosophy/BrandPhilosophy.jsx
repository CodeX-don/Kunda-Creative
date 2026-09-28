import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { useScrollAnimation } from '@hooks';
import deadvlei from '@assets/images/hero/hero-bg 1.jpeg';

/**
 * BrandPhilosophy — full-width panoramic quote over Deadvlei.
 * Burgundy overlay for readability, subtle parallax on desktop
 * (motion-safe only), cream italic serif quote.
 */
const BrandPhilosophy = () => {
  const [ref, controls] = useScrollAnimation(0.2);

  return (
    <Section spacing="none" ref={ref} aria-labelledby="philosophy-heading" className="relative overflow-hidden">
      {/* Panoramic backdrop with desktop parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center motion-safe:md:bg-fixed"
        style={{ backgroundImage: `url(${deadvlei})` }}
        role="img"
        aria-label="Deadvlei pan with ancient camelthorn silhouettes against a burnt-orange dune"
      />
      {/* Burgundy wash for text contrast */}
      <div className="absolute inset-0 bg-burgundy/40" aria-hidden="true" />

      <div className="relative min-h-[60vh] flex items-center py-section-mobile lg:py-section-desktop">
        <Container variant="narrow">
          <motion.div
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            initial="hidden"
            className="text-center max-w-[900px] mx-auto"
          >
            <svg
              className="w-12 h-12 mx-auto mb-8 text-cream/60"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <path d="M50 10 L50 30 M50 70 L50 90 M10 50 L30 50 M70 50 L90 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <ellipse cx="50" cy="50" rx="25" ry="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <blockquote id="philosophy-heading" className="font-serif text-[28px] lg:text-[32px] text-cream italic leading-tight mb-6 [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
              "Inspired by the tranquility, calmness, and sense of rest that define Namibia's tourism, hospitality and wellness industries"
            </blockquote>
            <cite className="font-mono text-label text-cream/80 uppercase tracking-wider not-italic">— The Kunda Vision</cite>
          </motion.div>
        </Container>
      </div>
    </Section>
  );
};

export default BrandPhilosophy;
