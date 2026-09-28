import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Section } from '@components/common';
import { useScrollAnimation } from '@hooks';
import { faqs } from '@data';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, controls] = useScrollAnimation(0.2);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section spacing="large" ref={ref} aria-labelledby="faq-heading">
      <Container variant="narrow">
        <motion.div
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          initial="hidden"
          className="text-center mb-12"
        >
          <span className="font-mono text-label text-olive uppercase tracking-wider block mb-4">Frequently Asked Questions</span>
          <h2 id="faq-heading" className="font-serif text-h2 text-burgundy">Common Questions</h2>
        </motion.div>

        <motion.div
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="bg-cream border border-charcoal/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-serif text-h4 text-burgundy pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-burgundy"
                  aria-hidden="true"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9 L12 15 L18 9" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="px-6 pb-5 border-t border-charcoal/10"
                  >
                    <p className="font-mono text-body text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default FAQ;