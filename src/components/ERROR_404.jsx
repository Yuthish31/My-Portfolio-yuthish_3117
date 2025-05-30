import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ERROR_404.css';

const ERROR_404 = () => {
  return (
    <motion.div 
      className="not-found-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="error-content">
        {/* Animated 404 digits */}
        <div className="error-digits">
          <motion.span
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}
          >
            4
          </motion.span>
          <motion.span
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', damping: 10 }}
            className="zero"
          >
            0
          </motion.span>
          <motion.span
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
          >
            4
          </motion.span>
        </div>

        {/* Error message */}
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="error-title"
        >
          Oops! Page Not Found
        </motion.h1>

        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="error-message"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Floating particles background */}
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100
              }}
              transition={{
                delay: Math.random() * 0.5,
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>

        {/* Back button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, type: 'spring' }}
        >
          <Link to="/" className="back-button">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Return Home
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ERROR_404;