import { forwardRef } from 'react';

const Button = forwardRef(
  ({
    variant = 'primary',
    size = 'medium',
    children,
    onClick,
    disabled = false,
    icon: Icon,
    className = '',
    type = 'button',
    as: Component = 'button',
    ...props
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-mono uppercase tracking-wider rounded-[7px_10px_8px_11px/10px_7px_11px_8px] transition-all duration-base focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:rotate-0 min-h-[44px]';

    const variants = {
      primary: 'bg-burgundy text-cream hover:bg-burgundy-dark hover:scale-[1.03] hover:rotate-1 active:scale-[0.98] active:rotate-0 shadow-[2px_2px_0_rgba(122,59,59,0.35)] hover:shadow-[3px_3px_0_rgba(26,26,26,0.25)]',
      secondary: 'bg-olive text-cream hover:bg-olive-light hover:scale-[1.03] hover:rotate-1 active:scale-[0.98] active:rotate-0 shadow-[2px_2px_0_rgba(74,82,64,0.35)] hover:shadow-[3px_3px_0_rgba(26,26,26,0.25)]',
      outline: 'border-2 border-burgundy text-burgundy bg-transparent hover:bg-burgundy hover:text-cream hover:scale-[1.03] hover:rotate-1 active:scale-[0.98] active:rotate-0 shadow-[2px_2px_0_rgba(122,59,59,0.25)]',
      text: 'bg-transparent text-burgundy underline decoration-wavy underline-offset-4 hover:underline-offset-[6px] hover:text-burgundy-dark',
      refined: 'border border-burgundy text-burgundy bg-transparent hover:bg-burgundy hover:text-cream transition-colors shadow-none',
      'ghost-light': 'border border-cream/70 text-cream bg-transparent hover:bg-cream hover:text-burgundy transition-colors shadow-none',
    };

    const sizes = {
      small: 'px-3 py-2 text-sm',
      medium: 'px-4 py-3 text-base',
      large: 'px-6 py-4 text-lg',
    };

    const iconStyles = Icon ? 'mr-2 flex-shrink-0' : '';

    return (
      <Component
        ref={ref}
        type={Component === 'button' ? type : undefined}
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {Icon && <Icon className={`${iconStyles} w-5 h-5`} aria-hidden="true" />}
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;