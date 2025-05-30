import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
    return (
        <div className="haikyuu-loader">
            <div className="jumper" />
            <p className="loading-text">Warming up the court...</p>
        </div>
    );
  };
  
  export default Loader;