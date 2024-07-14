"use client";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../../styles/landing.css';

const StatisticsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const statistics = [
    { id: 1, value: '15k', label: 'Outlets Worldwide' },
    { id: 2, value: '2M+', label: 'Satisfied Customers' },
    { id: 3, value: '9M+', label: 'Footwears Sold' },
  ];

  return (
    <div className="statistics-section">
      <div className="statistics-container">
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {statistics.map((stat) => (
              <SwiperSlide key={stat.id}>
                <div className="stat-slide">
                  <h2 className="stat-number">{stat.value}</h2>
                  <p className="stat-text">{stat.label}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="statistics-flex">
            {statistics.map((stat) => (
              <div key={stat.id} className="stat-slide">
                <h2 className="stat-number">{stat.value}</h2>
                <p className="stat-text">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticsSection;
