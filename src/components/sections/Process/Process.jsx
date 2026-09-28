import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { useScrollAnimation } from '@hooks';
import { processSteps } from '@data';

const Process = () => {
  const [ref, controls] = useScrollAnimation(0.2);

  return (
    <Section spacing="large" bgColor="cream-light" ref={ref} aria-labelledby="process-heading">
      <Container>
        <motion.div
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          initial="hidden"
          className="text-center mb-16"
        >
          <span className="font-mono text-label text-olive uppercase tracking-wider block mb-4">Our Process</span>
          <h2 id="process-heading" className="font-serif text-h2 text-burgundy">How We Work</h2>
        </motion.div>

        <motion.ol
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          className="relative grid gap-12 lg:grid-cols-4 lg:gap-8"
        >
          {/* Horizontal connector (desktop) */}
          <div
            className="hidden lg:block absolute top-6 left-6 right-6 h-0.5 bg-charcoal/20"
            aria-hidden="true"
          />
          {/* Vertical connector (mobile) */}
          <div
            className="lg:hidden absolute left-6 top-4 bottom-4 w-0.5 bg-charcoal/20"
            aria-hidden="true"
          />

          {processSteps.map((step) => (
            <motion.li
              key={step.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="relative flex gap-6 lg:flex-col lg:gap-0 lg:text-center lg:items-center"
            >
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center text-cream font-serif text-2xl border-4 border-cream-light">
                  {step.id}
                </div>
              </div>
              <div className="lg:pt-8">
                <span className="font-mono text-label text-olive uppercase tracking-wider block mb-2">
                  Step {String(step.id).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-h4 text-burgundy mb-3">{step.title}</h3>
                <p className="font-mono text-body text-charcoal/70 leading-relaxed">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  );
};

export default Process;
