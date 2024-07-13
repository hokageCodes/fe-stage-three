import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import ProductPage from './pages/index';
import CheckoutPage from './pages/checkout';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <main>
            <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/product/:id" component={<ProductPage />} />
            <Route path="/checkout" component={<CheckoutPage />} />
          </Routes>
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
