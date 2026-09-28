import { OptimizedImage } from '@components/ui';

/**
 * ProjectCard — editorial portfolio card.
 * Cream-light film frame (thinner on mobile), stamp shadow,
 * warm-graded photo, centered burgundy tape strip, category
 * badge, caption block. Rotation/placement/hover motion are
 * handled by the parent (WorkShowcase) so resting tilts at
 * each breakpoint survive hover interactions.
 */
const ProjectCard = ({ project, aspect = 'aspect-[4/3]' }) => {
  return (
    <article className="group relative bg-cream border-4 md:border-8 border-cream-light h-full">
      {/* Centered washi-tape strip — all screens */}
      <span
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-burgundy/80 rotate-1 z-20 pointer-events-none"
        aria-hidden="true"
      />
      <span className="absolute -top-4 right-6 z-20 bg-burgundy text-cream font-mono text-[10px] uppercase tracking-wider px-3 py-1 rotate-3">
        {project.category}
      </span>

      <div className={`overflow-hidden ${aspect}`}>
        <OptimizedImage
          src={project.image}
          alt={project.alt}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="w-full h-full"
          imgClassName="[filter:sepia(15%)_saturate(90%)] transition-transform duration-500 group-hover:scale-105 group-hover:[filter:sepia(10%)_saturate(100%)]"
        />
      </div>

      <div className="p-5">
        <h3 className="font-serif text-xl md:text-[24px] leading-snug text-burgundy">
          {project.client}
        </h3>
        <p className="font-mono text-[12px] text-olive uppercase tracking-wider mt-1">
          {project.service}
        </p>
        <span className="relative inline-block font-mono text-[12px] uppercase tracking-wider text-burgundy mt-4 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-burgundy after:content-[''] after:transition-all after:duration-300 group-hover:after:w-full">
          View Project <span aria-hidden="true">→</span>
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;
