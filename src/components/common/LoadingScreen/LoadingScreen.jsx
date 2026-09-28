import { motion } from 'framer-motion';

const LoadingScreen = ({ show = true, className = '' }) => {
  if (!show) return null;

  return (
    <motion.div
      className={`fixed inset-0 flex items-center justify-center bg-cream z-[10000] ${className}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="status"
      aria-label="Loading"
    >
      <div className="text-center">
        <motion.div
          className="w-16 h-16 mx-auto mb-6 border-4 border-burgundy border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />
        <p className="font-mono text-label text-olive uppercase tracking-wider">
          Loading...
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;