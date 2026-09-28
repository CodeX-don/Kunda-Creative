import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { useScrollAnimation } from '@hooks';

const OriginStory = () => {
  const [ref, controls] = useScrollAnimation(0.2);

  return (
    <Section spacing="large" ref={ref} aria-labelledby="origin-heading">
      <Container variant="narrow">
        <motion.div
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          initial="hidden"
        >
          <span className="font-mono text-label text-olive uppercase tracking-wider block mb-4">Origin Story</span>
          <h2 id="origin-heading" className="font-serif text-h2 text-burgundy mb-10">The Beginning</h2>
          <div className="max-w-[65ch]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-body-lg text-charcoal/80 leading-relaxed mb-8"
            >
              Kunda Creative CC was started by two young Namibian professionals who saw an opportunity to establish authority within the tourism, hospitality, and wellness sectors.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono text-body text-charcoal/70 leading-relaxed mb-8"
            >
              The name "Kunda" carries deep meaning—it symbolizes home, village, gathering, and belonging. It is African-rooted without being tied to a specific ethnicity, representing a universal concept of community and shared experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-mono text-body text-charcoal/70 leading-relaxed mb-8"
            >
              The idea behind the village was to create a space where stories, people, and experiences come together through shared creativity. This vision was inspired by the tranquility, calmness, and sense of rest that define Namibia's tourism, hospitality, and wellness industries—industries that thrive on authentic connection and meaningful experiences.
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default OriginStory;