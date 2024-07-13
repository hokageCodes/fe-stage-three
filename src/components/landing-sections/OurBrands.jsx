import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import "../../styles/landing.css"
const BrandsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check if window is defined to avoid SSR errors
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const brands = [
    { id: 1, src: '../../assets/svgs/brands/addidas.svg', alt: 'Adidas' },
    { id: 2, src: './assets/svgs/brands/nike.svg', alt: 'Nike' },
    { id: 3, src: './assets/svgs/brands/puma.svg', alt: 'Puma' },
    { id: 4, src: './assets/svgs/brands/fila.svg', alt: 'Fila' },
    { id: 5, src: './assets/svgs/brands/new-balance.svg', alt: 'New Balance' },
    { id: 6, src: './assets/svgs/brands/reebok.svg', alt: 'Reebok' },
    { id: 7, src: './assets/svgs/brands/converse.svg', alt: 'Converse' },
    { id: 8, src: './assets/svgs/brands/vans.svg', alt: 'Vans' },
    { id: 9, src: './assets/svgs/brands/asics.svg', alt: 'Asics' },
  ];

  return (
    <div className="brands-section">
      <div className="brands-container">
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="brand-circle">
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="brand-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>
            <h2 className="brands-title">Popular Brands</h2>
            <div className="brands-grid">
              {brands.map((brand) => (
                <div className="brand-circle" key={brand.id}>
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="brand-image"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandsSection;
