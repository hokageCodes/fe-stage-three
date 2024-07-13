import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/landing.css';

const SneakerSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="sneaker-section">
      {isMobile ? (
        <>
          <motion.div
            className="sneaker-image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="./assets/images/hero-img.png" alt="Sneaker" />
          </motion.div>
          <motion.div
            className="sneaker-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
          >
            <h1>All your favorite sneakers, in one place.</h1>
            <p>
              Exclusively for sneakerheads of all ages, gender, and the rest of humanity.
            </p>
            <motion.button
              className="explore-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="/product-listing">Explore</a>
            </motion.button>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            className="sneaker-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
          >
            <h1>All your favorite sneakers, in one place.</h1>
            <p>
              Exclusively for sneakerheads of all ages, gender, and the rest of humanity.
            </p>
            <motion.button
              className="explore-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="/product-listing">Explore</a>
            </motion.button>
          </motion.div>
          <motion.div
            className="sneaker-image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="./assets/images/hero-img.png" alt="Sneaker" />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default SneakerSection;
