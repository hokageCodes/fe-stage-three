import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../styles/product-page.css';

const API_BASE_URL = 'https://timbu-get-all-products.reavdev.workers.dev/';
const ORG_ID = '74f1f9120b5b47279157c2bc50c3ac49';
const APP_ID = '8A6P250Z9C3A9Y3';
const API_KEY = 'b42e2210c5c84b1c9d611b8a96c25ef120240712123130094656';

const ProductPage = ({ productId }) => {
  // State to hold the main image URL
  const [mainImage, setMainImage] = useState('');
  const [thumbnails, setThumbnails] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductData = async () => {
    const SINGLE_PRODUCT_URL = `https://timbu-get-single-product.reavdev.workers.dev/${productId}/?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`;
    
    try {
      setLoading(true);
      console.log('Fetching product data...');
      const response = await fetch(SINGLE_PRODUCT_URL);
      const data = await response.json();

      console.log('Fetched product data:', data);

      // Check and set main image
      const mainImageUrl = data.mainImage || '';
      console.log('Main image:', mainImageUrl);
      setMainImage(mainImageUrl);

      // Check and set thumbnails
      const thumbnailsArray = data.thumbnails || [];
      console.log('Thumbnails:', thumbnailsArray);
      setThumbnails(thumbnailsArray);

      // Check and set product details
      const details = data.details || {};
      console.log('Product details:', details);
      setProductDetails({
        title: details.title || 'No title available',
        rating: details.rating || 0,
        sizes: details.sizes || [],
        price: details.price || 'N/A',
        description: details.description || 'No description available',
        additionalDescription: details.additionalDescription || '',
      });

      setError(null); // Clear any previous error
    } catch (error) {
      console.error('Error fetching product data:', error);
      setError('Failed to fetch product data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [productId]);

  useEffect(() => {
    console.log('Current state:', {
      mainImage,
      thumbnails,
      productDetails,
      isMobile,
      loading,
      error,
    });
  }, [mainImage, thumbnails, productDetails, isMobile, loading, error]);

  if (loading) {
    return <div className="loading">Loading product...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="product-page">
      <div className="product-main-section">
        <div className="product-image-section">
          <img
            src={mainImage}
            alt={productDetails.title}
            className="product-image"
          />
        </div>
        <div className="product-details-section">
          <h1 className="product-title">{productDetails.title}</h1>
          <div className="star-rating">
            {Array(5).fill('★').map((star, index) => (
              <span key={index} className={index < productDetails.rating ? 'filled-star' : 'empty-star'}>★</span>
            ))}
          </div>
          <div className="product-options">
            <label>
              Size:
              <select>
                {productDetails.sizes.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>
            </label>
            <label>
              Qty:
              <select>
                {[1, 2, 3].map((qty) => (
                  <option key={qty} value={qty}>{qty}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="product-price">
            ${productDetails.price}
          </div>
          <p className="product-description">{productDetails.description}</p>
          <p className="product-description">{productDetails.additionalDescription}</p>

          {isMobile && (
            <Swiper
              spaceBetween={5} // Adjusted space between thumbnails
              slidesPerView={'auto'}
              className="thumbnail-swiper"
              autoplay
            >
              {thumbnails.map((thumbnail, index) => (
                <SwiperSlide key={index} className="thumbnail-slide">
                  <img
                    src={thumbnail}
                    alt={`thumbnail ${index + 1}`}
                    className="thumbnail"
                    onClick={() => setMainImage(thumbnail)}  // Handle click event
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button className="buy-now-button"><a href="/cart">Buy Now</a></button>
        </div>
      </div>
      {!isMobile && (
        <div className="thumbnail-gallery">
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => setMainImage(thumbnail)}  // Handle click event
            />
          ))}
        </div>
      )}
      <p className="cart-message">*This item has already been added to your cart.</p>
    </div>
  );
};

export default ProductPage;
