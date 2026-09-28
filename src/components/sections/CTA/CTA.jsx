import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { Button } from '@components/common';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@hooks';

const CTA = ({
  heading = "Let's tell your story",
  subheading = "Ready to elevate your brand?",
  buttonText = "Get in Touch",
  buttonLink = "/contact",
  variant = "default",
}) => {
  const [ref, controls] = useScrollAnimation(0.2);

  return (
    <Section spacing="large" bgColor={variant === 'inverted' ? 'burgundy' : 'cream'} ref={ref} aria-labelledby="cta-heading">
      <Container variant="narrow">
        <motion.div
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          initial="hidden"
          className="text-center"
        >
          <h2 id="cta-heading" className={`font-serif text-h2 ${variant === 'inverted' ? 'text-cream' : 'text-burgundy'} mb-4`}>
            {heading}
          </h2>
          {subheading && (
            <p className={`font-mono text-body-lg ${variant === 'inverted' ? 'text-cream/80' : 'text-charcoal/70'} mb-8 max-w-lg mx-auto`}>
              {subheading}
            </p>
          )}
          <Button
            variant={variant === 'inverted' ? 'outline' : 'primary'}
            size="large"
            as={Link}
            to={buttonLink}
          >
            {buttonText}
          </Button>
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="w-24 h-px bg-current opacity-30" aria-hidden="true" />
            <svg
              className="w-10 h-10 text-current opacity-40"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M50 20 Q50 35 50 30 M50 60 Q50 45 50 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
            </svg>
            <div className="w-24 h-px bg-current opacity-30" aria-hidden="true" />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default CTA;