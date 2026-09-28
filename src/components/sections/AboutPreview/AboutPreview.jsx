import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { useScrollAnimation } from '@hooks';
import { OptimizedImage } from '@components/ui';
import analogDesk from '@assets/images/Human Connection/download.jpeg';

const AboutPreview = () => {
  const [ref, controls] = useScrollAnimation(0.2);

  return (
    <Section spacing="large" id="about" ref={ref} aria-labelledby="about-heading">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            initial="hidden"
            className="order-2 lg:order-1"
          >
            <span className="font-mono text-label text-olive uppercase tracking-wider block mb-4">Introduction</span>
            <h2 id="about-heading" className="font-serif text-h2 text-burgundy mb-6">
              WE ARE KUNDA CREATIVE
            </h2>
            <p className="font-mono text-body text-charcoal/80 leading-relaxed mb-6">
              Kunda symbolizes home, village, gathering and belonging. African-rooted without being tied to a specific ethnicity.
            </p>
            <p className="font-mono text-body text-charcoal/70 leading-relaxed">
              Kunda Creative CC was started by two young Namibian professionals who saw an opportunity to establish authority within the tourism, hospitality, and wellness sectors. The idea behind the village was to create a space where stories, people, and experiences come together through shared creativity, inspired by the tranquility, calmness, and sense of rest that define Namibia's tourism, hospitality and wellness industries.
            </p>
          </motion.div>

          <motion.div
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
            }}
            initial="hidden"
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-4-3 relative overflow-hidden rounded-lg">
              <OptimizedImage
                src={analogDesk}
                alt="Vintage computer on a wooden desk bathed in warm golden window light"
                className="w-full h-full"
                sizes="(max-width: 767px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-grain-subtle opacity-10" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutPreview;