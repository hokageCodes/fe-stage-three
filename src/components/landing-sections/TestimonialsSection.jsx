"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../../styles/landing.css";

const testimonials = [
  {
    id: 1,
    text: "For a sneakerhead, Achilles has really helped me realize my dreams of owning a collection of the best sneakers. They never fail.",
    author: "Andre",
  },
  {
    id: 2,
    text: "I currently own about 35 pairs of sneakers and I bought them all from Achilles, I will always get my sneakers from Achilles.",
    author: "Milo",
  },
  {
    id: 3,
    text: "I buy more than two pairs whenever I go on Achilles, they’re every sneakerhead’s DisneyLand or CandyShop... literally!",
    author: "Ariel",
  },
];

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-title">
          <h2>What Our Customers Say</h2>
        </div>
        <div className="testimonials-content">
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
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="swiper-slide">
                  <div className="testimonial">
                    <img
                      src="/assets/svgs/quote.svg"
                      className="quote"
                      alt="quote"
                    />
                    <blockquote>“{testimonial.text}”</blockquote>
                    <p className="author">- {testimonial.author}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <React.Fragment key={testimonial.id}>
                  <div className="testimonial">
                    <img
                      src="/assets/svgs/quote.svg"
                      className="quote"
                      alt="quote"
                    />
                    <blockquote>{testimonial.text}</blockquote>
                    <p className="author">- {testimonial.author}</p>
                  </div>
                  {index < testimonials.length - 1 && (
                    <div className="divider"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
