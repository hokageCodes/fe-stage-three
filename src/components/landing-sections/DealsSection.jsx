import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { getAllProducts } from '../../services/api';
import '../../styles/landing.css';

const DealsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [bestDeals, setBestDeals] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const products = await getAllProducts(1, 10); // Fetch first 10 products

        console.log('Fetched products:', products); // Logging fetched products

        if (!products || products.length === 0) {
          throw new Error('No products found');
        }

        setBestDeals(products.slice(0, 5)); // First 5 products for best deals
        setTopProducts(products.slice(5, 10)); // Next 5 products for top products
        setError(null); // Clear any previous error
      } catch (error) {
        setError(error.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderSection = (title, items) => (
    <div className="deals-container">
      <h2 className="deals-title">{title}</h2>
      <div className="deals-content">
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.unique_id}>
                <div className="deal-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="deal-image"
                  />
                  <div className="deal-info">
                    <div className="deal-title">{item.name}</div>
                    <p className="deal-price">
                      ${item.price ? item.price.toFixed(2) : 'N/A'}
                    </p>
                    <button className="deal-button">Add to Cart</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="deals-grid">
            {items.map((item) => (
              <div key={item.unique_id} className="deal-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="deal-image"
                />
                <div className="deal-info">
                  <div className="deal-title">{item.name}</div>
                  <p className="deal-price">
                    ${item.price ? item.price.toFixed(2) : 'N/A'}
                  </p>
                  <button className="deal-button">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="deals-section">
      {bestDeals.length > 0 && renderSection('Best Deals Today', bestDeals)}
      <hr className="deals-divider" />
      {topProducts.length > 0 && renderSection('Top Products', topProducts)}
      {bestDeals.length === 0 && topProducts.length === 0 && (
        <div className="no-products">No products available</div>
      )}
    </div>
  );
};

export default DealsSection;
