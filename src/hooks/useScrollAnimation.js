import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.2, once = true) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once, amount: threshold, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return [ref, controls];
};

export const useStaggeredAnimation = (count, threshold = 0.2, delay = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return { ref, isInView, variants, itemVariants };
};