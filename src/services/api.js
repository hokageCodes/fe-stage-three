import axios from 'axios';

const API_BASE_URL = 'https://timbu-get-all-products.reavdev.workers.dev/';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllProducts = async (page = 1, size = 10) => {
  try {
    const response = await apiClient.get('/', {
      params: {
        page,
        size,
        Apikey: 'b42e2210c5c84b1c9d611b8a96c25ef120240712123130094656',
        Appid: '8A6P250Z9C3A9Y3',
        organization_id: '74f1f9120b5b47279157c2bc50c3ac49',
      },
    });

    console.log('API response:', response); // Logging response

    if (!response || !response.data) {
      throw new Error('No response data');
    }

    const { data } = response;
    console.log('API response data:', data);

    if (!data.items || data.items.length === 0) {
      throw new Error('No products found');
    }

    return data.items; // Return items instead of products
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await apiClient.get(`/products/${productId}`, {
      params: {
        Apikey: 'b42e2210c5c84b1c9d611b8a96c25ef120240712123130094656',
        Appid: '8A6P250Z9C3A9Y3',
        organization_id: '74f1f9120b5b47279157c2bc50c3ac49',
      },
    });

    console.log('API response:', response); 

    if (!response || !response.data) {
      throw new Error('No response data');
    }

    const { data } = response;
    console.log('API response data:', data);

    if (!data) {
      throw new Error('Product not found');
    }

    return data; // Return the product data
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error('Failed to fetch product');
  }
};
