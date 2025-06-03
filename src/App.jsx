import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './App.css';

import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home';
import About from './components/About';
import Creations from './components/Creations';
import Gallery from './components/Gallery';
import Attendance_App from './components/Attendance_App';
import HallAllotment from './components/HallAllotment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ERROR_404 from './components/ERROR_404';
import Loader from './components/Loader';
import Chatbot from './components/Chatbot';
import KayarepeWebsite from './components/KayarepeWebsite';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/attendance_app" element={<Attendance_App />} />
          <Route path="/hallallotment" element={<HallAllotment />} />
          <Route path="/kayarepewebsite" element={<KayarepeWebsite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ERROR_404 />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <CustomCursor />
            <AnimatedRoutes />
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
