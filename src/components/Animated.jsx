// src/components/Animated.js
import React from 'react';
import { motion } from 'framer-motion';

const Animated = ({ children, delay = 0, duration = 0.5, y = 20, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: false }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
