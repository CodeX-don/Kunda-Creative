import { forwardRef } from 'react';

const Container = forwardRef(
  ({
    variant = 'default',
    children,
    className = '',
    as: Component = 'div',
    ...props
  }, ref) => {
    const variants = {
      default: 'max-w-container mx-auto px-6 lg:px-12',
      narrow: 'max-w-container-narrow mx-auto px-6 lg:px-12',
      wide: 'max-w-container-wide mx-auto px-6 lg:px-12',
      full: 'w-full px-6 lg:px-12',
    };

    return (
      <Component
        ref={ref}
        className={`${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export default Container;