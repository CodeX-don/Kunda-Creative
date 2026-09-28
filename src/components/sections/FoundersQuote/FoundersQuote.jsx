import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { useScrollAnimation } from '@hooks';
import typewriterDesk from '@assets/images/workspace aesthetic/download (12).jpeg';

/**
 * FoundersQuote — companion to the home page's Kunda Vision band.
 * Same panoramic-quote DNA, different voice: savannah sunset,
 * deep olive wash (instead of burgundy), left-aligned type with
 * a cream rule, static backdrop (no parallax).
 */
const FoundersQuote = () => {
  const [ref, controls] = useScrollAnimation(0.2);

  return (
    <Section spacing="none" ref={ref} aria-labelledby="founders-quote-heading" className="relative overflow-hidden">
      {/* Savannah backdrop, static */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${typewriterDesk})` }}
        role="img"
        aria-label="Vintage typewriter on a writer's desk in warm lamplight"
      />
      {/* Deep olive wash for text contrast */}
      <div className="absolute inset-0 bg-olive/55" aria-hidden="true" />

      <div className="relative min-h-[50vh] flex items-center py-section-mobile lg:py-section-desktop">
        <Container>
          <motion.blockquote
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            initial="hidden"
            className="max-w-3xl border-l-2 border-cream/50 pl-8"
          >
            <p
              id="founders-quote-heading"
              className="font-serif text-[28px] lg:text-[32px] text-cream leading-tight mb-6 [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]"
            >
              &ldquo;We don&apos;t just create digital experiences. We build villages where brands
              belong.&rdquo;
            </p>
            <footer className="font-mono text-label text-cream/80 uppercase tracking-wider">
              — The Founders
            </footer>
          </motion.blockquote>
        </Container>
      </div>
    </Section>
  );
};

export default FoundersQuote;
