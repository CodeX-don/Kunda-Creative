import { forwardRef } from 'react';

const Section = forwardRef(
  ({
    spacing = 'medium',
    bgColor = 'transparent',
    children,
    className = '',
    as: Component = 'section',
    ...props
  }, ref) => {
    const spacingClasses = {
      none: '',
      small: 'py-10 lg:py-16',
      medium: 'py-section-mobile lg:py-section-desktop',
      large: 'py-20 lg:py-32',
      'x-large': 'py-24 lg:py-40',
    };

    const bgClasses = {
      transparent: '',
      cream: 'bg-cream',
      'cream-light': 'bg-cream-light',
      burgundy: 'bg-burgundy text-cream',
      olive: 'bg-olive text-cream',
      charcoal: 'bg-charcoal text-cream',
    };

    return (
      <Component
        ref={ref}
        className={`${spacingClasses[spacing]} ${bgClasses[bgColor]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = 'Section';

export default Section;