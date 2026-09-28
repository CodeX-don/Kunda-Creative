import { OptimizedImage } from '@components/ui';

/**
 * FilmFrame — print-style photo treatment.
 * Cream frame, stamp shadow, slight rotation, Space Mono caption,
 * warm filter + subtle vignette. Rotation only on lg+ to avoid
 * mobile overflow.
 */
const FilmFrame = ({
  src,
  alt,
  caption,
  rotateClass = 'lg:rotate-1',
  sizes,
  priority = false,
  className = '',
  imgClassName = '[filter:contrast(95%)_saturate(90%)]',
}) => {
  return (
    <figure className={className}>
      <div
        className={`border-[8px] border-cream-light shadow-[4px_4px_0_rgba(122,59,59,0.2)] overflow-hidden ${rotateClass}`}
      >
        <div className="relative">
          <OptimizedImage
            src={src}
            alt={alt}
            sizes={sizes}
            priority={priority}
            className={`w-full h-full ${imgClassName}`}
          />
          <div
            className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_center,transparent_60%,rgba(26,26,26,0.15)_100%)]"
            aria-hidden="true"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="font-mono text-body-sm text-charcoal/60 mt-4 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default FilmFrame;
