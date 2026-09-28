import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { Card } from '@components/ui';
import { useScrollAnimation } from '@hooks';
import { values } from '@data';

const Values = () => {
  const [ref, controls] = useScrollAnimation(0.2);

  return (
    <Section spacing="large" ref={ref} aria-labelledby="values-heading">
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
          <span className="font-mono text-label text-olive uppercase tracking-wider block mb-4">Our Values</span>
          <h2 id="values-heading" className="font-serif text-h2 text-burgundy">What We Stand For</h2>
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
          {values.map((value) => (
            <motion.div
              key={value.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <Card variant="elevated" hover className="p-6 text-center min-h-[240px]">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-cream-light rounded-lg">
                  <svg
                    className="w-6 h-6 text-burgundy"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {value.id === 'vision' && <path d="M12 2 L12 22 M2 12 L22 12" />}
                    {value.id === 'authenticity' && <path d="M12 22 C12 22 4 16 4 8 C4 4 7.5 2 12 2 C16.5 2 20 4 20 8 C20 16 12 22 12 22" />}
                    {value.id === 'collaboration' && (
                      <>
                        <path d="M17 21 V19 A2 2 0 0 0 15 17 H9 A2 2 0 0 0 7 19 V21" />
                        <path d="M9 17 H15" />
                        <path d="M12 2 V9" />
                        <path d="M7 21 V15 A2 2 0 0 1 9 13 H15 A2 2 0 0 1 17 15 V21" />
                      </>
                    )}
                    {value.id === 'roots' && <path d="M12 22 V12 M12 12 L4 22 M12 12 L20 22" />}
                    {value.id === 'tranquility' && <path d="M17 18 A5 5 0 0 0 7 18" />}
                    {value.id === 'belonging' && (
                      <>
                        <path d="M17 21 V19 A2 2 0 0 0 15 17 H9 A2 2 0 0 0 7 19 V21" />
                        <path d="M9 17 H15" />
                        <circle cx="12" cy="7" r="4" />
                        <path d="M12 11 V19" />
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="font-serif text-h4 text-burgundy mb-2">{value.title}</h3>
                <p className="font-mono text-body-sm text-charcoal/70 leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Values;