import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { Card, ServiceIcon } from '@components/ui';
import { useScrollAnimation } from '@hooks';
import { services } from '@data';

const ServicesGrid = () => {
  const [ref, controls] = useScrollAnimation(0.2);

  return (
    <Section spacing="large" ref={ref} aria-labelledby="services-heading">
      <Container>
        <motion.div
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 } },
          }}
          initial="hidden"
          className="text-center mb-16"
        >
          <span className="font-mono text-label text-olive uppercase tracking-wider block mb-4">Our Services</span>
          <h2 id="services-heading" className="font-serif text-h2 text-burgundy">
            Three Pillars of Creative Excellence
          </h2>
        </motion.div>

        <motion.div
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <Card variant="elevated" hover className="h-full p-8 flex flex-col min-h-[280px]">
                <div className="w-14 h-14 mb-6 flex items-center justify-center bg-cream-light rounded-[10px_14px_11px_15px/14px_10px_15px_11px]">
                  <ServiceIcon name={service.id} className="w-full h-full text-burgundy" />
                </div>
                <h3 className="font-serif text-h4 text-burgundy mb-3">{service.label}</h3>
                <p className="font-mono text-body text-charcoal/70 mb-4 flex-1">{service.shortDescription}</p>
                <span className="font-mono text-label text-olive uppercase tracking-wider link-underline inline-block w-fit">
                  Learn more
                </span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default ServicesGrid;