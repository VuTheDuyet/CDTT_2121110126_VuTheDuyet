// src/pages/buyer/BuyerProductIndex.js
import React, { useEffect, useState } from 'react';
import ProductService from '../../../services/ProductService';
import { urlImage } from '../../../config';
import { toast } from 'react-toastify';
import BuyerCardProduct from './CardProduct';
import '../styles/ProductIndex.css'; // Import file CSS để tùy chỉnh bố cục

const BuyerProductIndex = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ProductService.index();
        setProducts(result.products);
        setLoad(true);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [reload]);

  const handleAddToCart = (product) => {
    // Thêm xử lý thêm vào giỏ hàng tại đây
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <BuyerCardProduct
          key={product.id}
          product={product}
          urlImage={urlImage}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default BuyerProductIndex;
