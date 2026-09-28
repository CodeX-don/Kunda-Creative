import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { useScrollAnimation } from '@hooks';
import { villageConcept } from '@data';
import { FilmFrame } from '@components/vintage';
import vinylGathering from '@assets/images/workspace aesthetic/download (14).jpeg';

const VillageConcept = () => {
  const [ref, controls] = useScrollAnimation(0.2);

  return (
    <Section spacing="large" ref={ref} aria-labelledby="village-heading">
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
            <FilmFrame
              src={vinylGathering}
              alt="Hands sharing vinyl records beside a yellow rotary telephone in warm light"
              caption="Analog souls, shared stories"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
            }}
            initial="hidden"
            className="order-1 lg:order-2"
          >
            <span className="font-mono text-label text-olive uppercase tracking-wider block mb-4">The Village Concept</span>
            <h2 id="village-heading" className="font-serif text-h2 text-burgundy mb-6">{villageConcept.title}</h2>
            <div className="max-w-[65ch]">
              <p className="font-mono text-body text-charcoal/70 leading-relaxed mb-6">
                {villageConcept.description}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default VillageConcept;