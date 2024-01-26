import React, { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
import productService from '../../../services/ProductService';
import '../styles/frontend.css'
import { FaEdit, FaEye } from 'react-icons/fa';
import '../styles/buyerCardProduct.css'; // Import CSS

const ProductNew = ({onAddToCart}) => {
    const [productsnew, setproductsnew] = useState([]);
    const limit = 3;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await productService.index(limit);
                setproductsnew(result.products);

            } catch (error) {
                console.error("Error fetching new products:", error);
            }
        };

        fetchProducts();
    }, [limit]);
    return (
        <section id="products" className="product-store position-relative">
            <div className="container display-header d-flex flex-wrap justify-content-between pb-4">
                <h3>sản phảm mới:</h3>
                <div className='row'>
                    {/* Repeat this structure for each product card */}
                    {productsnew.length > 0 ? (
                        productsnew.map((product) => (
                            <div key={product.id} className="col-md-4 col-lg-3">
                                <div class="col-6 col-md-3 mb-4">
                                    <div class="product-item border">
                                        <div class="product-item-image">
                                            <a href={`/product/${product.id}`}>
                                                <img src={urlImage + "product/" + product.image}
                                                    alt={product.image} class="img-fluid"
                                                    id="img1" />
                                            </a>
                                        </div>
                                        <h2 class="product-item-name text-main text-center fs-5 py-1">
                                            <a href={`/product/${product.id}`}>{product.name}</a>
                                        </h2>
                                        <h3 class="product-item-price fs-6 p-2 d-flex">
                                            <div class="flex-fill"><del>200.000đ</del></div>
                                            <div class="flex-fill text-end text-main">{product.price}</div>
                                        </h3>
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
                        )
                        )
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductNew;