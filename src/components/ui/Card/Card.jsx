import { forwardRef } from 'react';

const Card = forwardRef(
  ({
    variant = 'default',
    hover = false,
    children,
    className = '',
    as: Component = 'div',
    ...props
  }, ref) => {
    const variants = {
      default: 'bg-cream rounded-lg',
      elevated: 'bg-cream rounded-lg shadow-paper',
      bordered: 'bg-cream rounded-lg border-2 border-burgundy',
    };

    const hoverClasses = hover
      ? 'transition-all duration-base hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2'
      : 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2';

    return (
      <Component
        ref={ref}
        className={`${variants[variant]} ${hoverClasses} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export default Card;