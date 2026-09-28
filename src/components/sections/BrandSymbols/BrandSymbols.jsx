import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { Card } from '@components/ui';
import { useScrollAnimation } from '@hooks';
import { brandSymbols } from '@data';

const BrandSymbols = () => {
  const [ref, controls] = useScrollAnimation(0.2);

  return (
    <Section spacing="large" ref={ref} aria-labelledby="symbols-heading">
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
          <span className="font-mono text-label text-olive uppercase tracking-wider block mb-4">Brand Symbols</span>
          <h2 id="symbols-heading" className="font-serif text-h2 text-burgundy">Our Visual Language</h2>
        </motion.div>

        <motion.div
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          className="grid md:grid-cols-2 gap-8"
        >
          {brandSymbols.map((symbol) => (
            <motion.div
              key={symbol.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <Card variant="elevated" hover className="p-8 h-full min-h-[320px]">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-cream-light rounded-lg">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-burgundy"
                    aria-hidden="true"
                    focusable="false"
                  >
                    {symbol.id === 'giraffe' && (
                      <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M50 20 Q50 10 45 10 Q40 10 40 20" />
                        <path d="M45 10 Q45 5 50 5 Q55 5 55 10" />
                        <circle cx="42" cy="8" r="2" fill="currentColor" />
                        <circle cx="58" cy="8" r="2" fill="currentColor" />
                        <path d="M50 20 L50 55" />
                        <path d="M35 35 L50 55 L65 35" />
                        <ellipse cx="50" cy="70" rx="25" ry="15" />
                        <path d="M50 55 L40 70 M50 55 L60 70" />
                      </g>
                    )}
                    {symbol.id === 'fingerprint' && (
                      <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
                        <path d="M50 70 Q50 20 50 15" />
                        <path d="M40 75 Q40 25 50 20" />
                        <path d="M30 80 Q30 30 45 25" />
                        <path d="M60 75 Q60 25 50 20" />
                        <path d="M70 80 Q70 30 55 25" />
                        <path d="M25 85 Q25 35 40 30" />
                        <path d="M75 85 Q75 35 60 30" />
                      </g>
                    )}
                  </svg>
                </div>
                <h3 className="font-serif text-h3 text-burgundy mb-2 text-center">{symbol.name}</h3>
                <p className="font-mono text-body-sm text-olive text-center mb-4">{symbol.meaning}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-mono text-label text-olive uppercase tracking-wider mb-1">Meaning</h4>
                    <p className="font-mono text-body-sm text-charcoal/70 leading-relaxed">{symbol.description}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-label text-olive uppercase tracking-wider mb-1">Application</h4>
                    <p className="font-mono text-body-sm text-charcoal/70 leading-relaxed">{symbol.application}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default BrandSymbols;