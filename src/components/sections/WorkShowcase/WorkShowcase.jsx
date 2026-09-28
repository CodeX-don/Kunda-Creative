import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container, Section, Button } from '@components/common';
import { ProjectCard } from '@components/ui';
import { useScrollAnimation, useMediaQuery, useIsMobile } from '@hooks';
import moodWall from '@assets/images/workspace aesthetic/download (2).jpeg';
import studioCrew from '@assets/images/Human Connection/download (2).jpeg';
import studioLights from '@assets/images/workspace aesthetic/download (11).jpeg';
import retroOffice from '@assets/images/workspace aesthetic/download (8).jpeg';
import overheadDuo from '@assets/images/Human Connection/download (3).jpeg';

/**
 * WorkShowcase — "Featured Work" editorial collage gallery.
 * Asymmetrical 12-column collage on desktop (overlaps + tilts),
 * 2-column on tablet, stacked on mobile. Placeholder client work;
 * cards are presentational (no dead links) with a contact CTA.
 */
const projects = [
  {
    id: 1,
    client: 'Heritage Tours',
    service: 'Brand Strategy & Identity',
    category: 'Tourism',
    image: moodWall,
    alt: 'Designer studying a wall of brand mood boards and printouts in warm light',
    aspect: 'aspect-[3/4]',
    placement:
      'col-span-full md:col-span-2 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-2 lg:rotate-0',
  },
  {
    id: 2,
    client: 'Namib Wellness',
    service: 'Social Media Management',
    category: 'Wellness',
    image: studioCrew,
    alt: 'Creative group gathered around a table in candid discussion',
    aspect: 'aspect-[3/4]',
    placement:
      'col-span-full md:col-span-1 md:-mt-5 lg:col-start-6 lg:col-span-4 lg:row-start-1 lg:-mt-12 lg:rotate-[-2deg] lg:z-10',
  },
  {
    id: 3,
    client: 'Desert Trails',
    service: 'Video Production',
    category: 'Production',
    image: studioLights,
    alt: 'Dark photography studio with strobes, cameras and a styled chair',
    aspect: 'aspect-square',
    placement:
      'col-span-full md:col-span-1 md:mt-10 lg:col-start-10 lg:col-span-3 lg:row-start-1 lg:mt-20 lg:rotate-[1.5deg]',
  },
  {
    id: 4,
    client: 'Coastal Retreat',
    service: 'Digital Campaign',
    category: 'Tourism',
    image: retroOffice,
    alt: 'Wood-panelled 1970s office with curved desk and garden windows',
    aspect: 'aspect-[16/10]',
    placement:
      'col-span-full md:col-span-1 md:-mt-5 lg:col-start-8 lg:col-span-5 lg:row-start-2 lg:-mt-10 lg:rotate-[1deg]',
  },
  {
    id: 5,
    client: 'Serengeti Lodge',
    service: 'Digital Branding & Photography',
    category: 'Tourism',
    image: overheadDuo,
    alt: 'Two collaborators viewed from above, sharing a laptop and phone',
    aspect: 'aspect-[4/3]',
    placement:
      'col-span-full md:col-span-1 lg:col-start-1 lg:col-span-5 lg:row-start-3 lg:rotate-0',
  },
];

const getContainerVariants = (isCoarse) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isCoarse ? 0.1 : 0.2,
      delayChildren: isCoarse ? 0.1 : 0.3,
    },
  },
});

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const filters = ['All Work', 'Tourism', 'Wellness', 'Production'];

const WorkShowcase = () => {
  const [ref, controls] = useScrollAnimation(0.2);
  const [activeFilter, setActiveFilter] = useState('All Work');
  const isCoarse = useIsMobile();
  const canHover = useMediaQuery('(hover: hover)');
  const containerVariants = getContainerVariants(isCoarse);

  const visibleProjects =
    activeFilter === 'All Work'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <Section spacing="large" ref={ref} aria-labelledby="work-heading">
      <Container>
        <motion.div
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          initial="hidden"
          className="text-left border-b border-burgundy/30 pb-8 mb-12"
        >
          <span className="font-mono text-label text-olive uppercase tracking-wider block mb-4">
            Selected Projects
          </span>
          <h2 id="work-heading" className="font-serif text-3xl md:text-h2 text-burgundy">
            Featured Work
          </h2>
          <p className="font-mono text-body-sm text-olive uppercase tracking-wider mt-3">
            Stories we&apos;ve helped tell
          </p>
        </motion.div>

        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-3 mb-4"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`font-mono text-[12px] uppercase tracking-wider px-5 min-h-[44px] inline-flex items-center border transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-burgundy text-cream border-burgundy'
                    : 'bg-transparent text-olive border-burgundy/30 hover:border-burgundy hover:text-burgundy'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 py-6"
        >
          {visibleProjects.map((project, index) => {
            // Scattered-polaroid tilt: alternating on mobile, softer on
            // tablet, per-card editorial tilts take over on desktop.
            const tilt =
              index % 2 === 0
                ? 'rotate-[-1.5deg] md:rotate-[-1deg]'
                : 'rotate-[1.5deg] md:rotate-[1deg]';
            return (
              <div key={project.id} className={`relative ${tilt} ${project.placement}`}>
                <motion.div
                  variants={itemVariants}
                  whileHover={
                    canHover
                      ? {
                          scale: 1.02,
                          y: -4,
                          boxShadow: '6px 6px 0px rgba(122, 59, 59, 0.3)',
                          transition: { duration: 0.3 },
                        }
                      : undefined
                  }
                  className="h-full shadow-paper"
                >
                  <ProjectCard project={project} aspect={project.aspect} />
                </motion.div>
              </div>
            );
          })}

          {/* Margin doodle — fills the last cell, desktop only */}
          <div className="hidden lg:flex lg:col-start-7 lg:col-span-6 lg:row-start-3 flex-col items-start justify-center pl-8">
            <svg
              viewBox="0 0 100 40"
              className="w-24 h-10 text-burgundy mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4 30 Q 50 4, 88 22" />
              <path d="M80 16 L89 22 L81 29" />
            </svg>
            <p className="font-mono text-body-sm text-charcoal/60 leading-relaxed max-w-[32ch]">
              Fresh from the village — full case studies shared on request.
            </p>
          </div>
        </motion.div>

        <div className="text-center mt-16">
          <Button variant="outline" size="large" as={Link} to="/contact">
            Start Your Project →
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default WorkShowcase;
