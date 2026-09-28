import { motion } from 'framer-motion';

const ScrollIndicator = ({ targetId = '#about', tone = 'dark', className = '' }) => {
  const handleClick = () => {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLight = tone === 'light';
  const ring = isLight ? 'border-cream/80' : 'border-burgundy';
  const dot = isLight ? 'bg-cream/80' : 'bg-burgundy';
  const label = isLight ? 'text-cream/70' : 'text-olive';

  return (
    <motion.button
      onClick={handleClick}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 min-h-[44px] min-w-[44px] justify-center ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      aria-label="Scroll down"
      aria-controls={targetId.replace('#', '')}
    >
      <span className={`w-6 h-10 border-2 ${ring} rounded-full flex justify-center`} aria-hidden="true">
        <motion.span
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={`w-1 h-3 ${dot} rounded-full mt-2`}
        />
      </span>
      <span className={`font-mono text-label uppercase tracking-wider ${label}`}>Scroll</span>
    </motion.button>
  );
};

export default ScrollIndicator;
