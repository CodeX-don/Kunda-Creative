import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Section } from '@components/common';
import { OptimizedImage } from '@components/ui';
import { FilmFrame } from '@components/vintage';
import { useScrollAnimation } from '@hooks';
import { services } from '@data';
import digitalOffice from '@assets/images/workspace aesthetic/80s Aesthetic Retro Office Midcentury Modern.jpeg';
import communityLaptops from '@assets/images/Human Connection/download (1).jpeg';
import filmCameras from '@assets/images/Human Connection/kirlian photography  app.jpeg';

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState('digital');
  const [ref, controls] = useScrollAnimation(0.2);

  const currentService = services.find(s => s.id === activeTab) || services[0];

  return (
    <Section spacing="large" ref={ref} aria-labelledby="services-tabs-heading">
      <Container>
        <motion.div
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 } },
          }}
          initial="hidden"
        >
          <div className="flex flex-wrap gap-4 mb-12" role="tablist" aria-label="Service categories">
            {services.map((service) => (
              <button
                key={service.id}
                role="tab"
                aria-selected={activeTab === service.id}
                aria-controls={`${service.id}-panel`}
                id={`${service.id}-tab`}
                onClick={() => setActiveTab(service.id)}
                className={`font-mono text-label uppercase tracking-wider px-6 py-3 rounded-md transition-all duration-base ${
                  activeTab === service.id
                    ? 'bg-burgundy text-cream shadow-paper'
                    : 'bg-cream text-charcoal hover:text-burgundy border border-charcoal/20'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`${activeTab}-panel`}
              role="tabpanel"
              aria-labelledby={`${activeTab}-tab`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
            >
              <div>
                <span className="font-mono text-label text-olive uppercase tracking-wider block mb-3">
                  {currentService.id === 'digital' ? 'Pillar One' : currentService.id === 'social' ? 'Pillar Two' : 'Pillar Three'}
                </span>
                <h3 className="font-serif text-h2 text-burgundy mb-4">{currentService.label}</h3>
                <p className="font-mono text-body-lg text-charcoal/70 leading-relaxed mb-8">{currentService.description}</p>

                <div className="space-y-6">
                  {currentService.services.map((svc, index) => (
                    <motion.div
                      key={svc.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h4 className="font-serif text-h4 text-burgundy mb-2">{svc.title}</h4>
                      <p className="font-mono text-body text-charcoal/70 leading-relaxed">{svc.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                {currentService.id === 'digital' && (
                  <figure>
                    <div className="overflow-hidden rounded-lg">
                      <OptimizedImage
                        src={digitalOffice}
                        alt="Warm mid-century office with vintage computer, leather chair and plants"
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="aspect-[4/3] [filter:sepia(20%)_saturate(70%)]"
                      />
                    </div>
                    <figcaption className="font-mono text-body-sm text-charcoal/60 mt-4 text-center">
                      The analog office — where strategy begins
                    </figcaption>
                  </figure>
                )}
                {currentService.id === 'social' && (
                  <figure>
                    <div className="relative overflow-hidden rounded-lg">
                      <OptimizedImage
                        src={communityLaptops}
                        alt="Two young collaborators with laptops surrounded by magazines in warm light"
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="aspect-[4/3] [filter:saturate(95%)_contrast(98%)]"
                      />
                      <div className="absolute inset-0 bg-burgundy/10 pointer-events-none" aria-hidden="true" />
                    </div>
                    <figcaption className="font-mono text-body-sm text-charcoal/60 mt-4 text-center">
                      Where stories gather
                    </figcaption>
                  </figure>
                )}
                {currentService.id === 'production' && (
                  <FilmFrame
                    src={filmCameras}
                    alt="Film and digital cameras with Kodak film roll and lens filters on dark wood"
                    caption="Tools of the trade — film & digital"
                    imgClassName="[filter:grayscale(100%)_sepia(25%)_contrast(95%)]"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ServicesTabs;