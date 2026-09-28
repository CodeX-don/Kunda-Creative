import { motion } from 'framer-motion';
import { useReducedMotion } from '@hooks';

/**
 * VintageTelephone — hand-drawn line-art rotary phone.
 * Gentle float animation; static when user prefers reduced motion.
 */
const TelephoneArt = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {/* Handset resting bar */}
    <path d="M28 52 C35 40, 45 32.5, 60 31 C75 29.5, 86 35.5, 92 47" />
    {/* Second sketch pass on the bar */}
    <path d="M33 50 C40 42, 50 36, 60.5 35" />
    {/* Left ear cup */}
    <path d="M24 50.5 C26 46.5, 30 44.5, 33.8 45.5 C34.8 50.5, 32.8 55, 29 56.6 C26 57.2, 23.4 54.2, 24 50.5 Z" />
    {/* Right ear cup */}
    <path d="M96 50.5 C94 46.5, 90 44.5, 86.2 45.5 C85.2 50.5, 87.2 55, 91 56.6 C94 57.2, 96.6 54.2, 96 50.5 Z" />
    {/* Coiled cord */}
    <path d="M27 57.5 C24 63, 30 66, 27.2 71.5 C24.5 77, 30.5 80, 28.2 86.5" />
    {/* Base (squat, slightly lopsided) */}
    <path d="M30 88.5 C45 87, 75 89, 90 87.5 C92 87.3, 92.4 89, 91.9 90.5 C91 95.5, 91.4 99.5, 90.4 103.5 C75 105, 45 104, 29.6 104.5 C28.1 104.5, 27.6 103, 28.1 101.5 C29.1 96.5, 28.6 92.5, 30 88.5 Z" />
    {/* Rotary dial (wobbly ring) */}
    <path d="M60 78.5 C68 78, 74.5 82.5, 74 90.5 C73.5 98.5, 66.5 103.5, 59.5 103 C52.5 102.5, 47 97, 47.5 89.5 C48 82, 53 79, 60 78.5 Z" />
    {/* Finger holes */}
    <circle cx="60" cy="85" r="1.8" />
    <circle cx="66.5" cy="89" r="1.8" />
    <circle cx="64" cy="95.5" r="1.8" />
    <circle cx="57" cy="95" r="1.8" />
    <circle cx="53.5" cy="89.5" r="1.8" />
    {/* Finger stop */}
    <path d="M77.5 93.5 L81.5 92.3" />
    {/* Dial center */}
    <circle cx="60" cy="90.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const VintageTelephone = ({ className = 'w-28 h-28 lg:w-36 lg:h-36', animate = true }) => {
  const prefersReducedMotion = useReducedMotion();

  if (!animate || prefersReducedMotion) {
    return <TelephoneArt className={className} />;
  }

  return (
    <motion.div
      className="inline-block"
      animate={{ y: [0, -5, 0], rotate: [0, 1, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <TelephoneArt className={className} />
    </motion.div>
  );
};

export default VintageTelephone;
