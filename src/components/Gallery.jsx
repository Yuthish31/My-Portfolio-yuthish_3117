import './Gallery.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../assets/img/vinayagar.png';
import img2 from '../assets/img/MJ_Poster.png';
import img3 from '../assets/img/admission.png';
import img4 from '../assets/img/Business Card.png';
import img5 from '../assets/img/Admin_Home.jpg';
import img6 from '../assets/img/CA_Admission_Opened.png';
import img7 from '../assets/img/happy-janmashtami.png';
import img8 from '../assets/img/KRP Card.png';
import img9 from '../assets/img/maths-quiz.png';
import img10 from '../assets/img/App_login.png';
import img11 from '../assets/img/404.png';
import img12 from '../assets/img/web_.png';
import img13 from '../assets/img/Add_Staff.jpg';

const posterImages = [
  { id: 1, src: img1, title: 'Happy Vinayagar Chaturthi', category: 'Function', size: 'large' },
  { id: 2, src: img2, title: 'Poster for Company', category: 'Internship', size: 'medium' },
  { id: 3, src: img3, title: 'College Admission', category: 'Education', size: 'small' },
  { id: 4, src: img4, title: 'Business Card', category: 'Marketing', size: 'medium' },
  { id: 5, src: img5, title: 'Admin Home Page', category: 'App Development Page', size: 'large' },
  { id: 6, src: img6, title: 'College Admission', category: 'Education', size: 'small' },
  { id: 7, src: img7, title: 'Happy Janmashtami', category: 'Function', size: 'medium' },
  { id: 8, src: img8, title: 'KRP Company Poster', category: 'Business Advertisement', size: 'large' },
  { id: 9, src: img9, title: 'Maths Quiz Poster', category: 'National Mathematics Day [Education]', size: 'small' },
  { id: 10, src: img10, title: 'App Login', category: 'App Development Page', size: 'medium' },
  { id: 11, src: img11, title: '404 Page', category: 'App Development Page', size: 'large' },
  { id: 12, src: img12, title: 'Web Page', category: 'Web Development Page', size: 'small' },
  { id: 13, src: img13, title: 'Add Staff Page', category: 'App Development Page', size: 'medium' },
];

const PosterDesign = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="poster-gallery-container">
      <div className="gallery-header">
        <h1>Poster Design Portfolio</h1>
        <p>Every poster tells a story. I just make it unforgettable.</p>
      </div>

      <div className="masonry-gallery">
        {posterImages.map((image) => (
          <motion.div
            key={image.id}
            className={`gallery-item ${image.size}`}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03, zIndex: 1 }}
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.src} 
              alt={image.title} 
              loading="lazy" 
              className="gallery-image"
            />
            <div className="image-overlay">
              <h3>{image.title}</h3>
              <p>{image.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-btn" 
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="modal-image"
              />
              <div className="modal-info">
                <h2>{selectedImage.title}</h2>
                <p className="category">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PosterDesign;