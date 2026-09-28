import { useState } from 'react';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  imgClassName = '',
  priority = false,
  sizes,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!src) return null;

  return (
    <div className={`overflow-hidden ${className}`}>
      {!hasError && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${imgClassName}`}
          {...props}
        />
      )}
      {hasError && (
        <div className="w-full h-full min-h-[200px] bg-cream-dark flex items-center justify-center">
          <svg className="w-12 h-12 text-charcoal/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      )}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-cream-dark animate-pulse" aria-hidden="true" />
      )}
    </div>
  );
};

export default OptimizedImage;
