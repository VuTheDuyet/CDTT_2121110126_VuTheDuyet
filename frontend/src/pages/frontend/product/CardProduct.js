// src/components/BuyerCardProduct.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye } from 'react-icons/fa';
import '../styles/buyerCardProduct.css'; // Import CSS

const BuyerCardProduct = ({ product, urlImage, onAddToCart }) => {
  return (
    <div className="buyer-card">
      <img className="buyer-card-img" src={`${urlImage}product/${product.image}`} alt={product.image} />
      <div className="buyer-card-body">
        <div className="buyer-card-name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </div>
        <div className="buyer-card-price">
          ${product.price}
        </div>
        <div className="buyer-card-function">
          <button className="buyer-card-add-to-cart" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
          <button>
            <a href={`/product/detail/${product.id}`} className="px-1 text-success">
              <FaEdit />
            </a>
          </button>
        </div>
      </div>
      
    </div>
    
  );
};

export default BuyerCardProduct;
