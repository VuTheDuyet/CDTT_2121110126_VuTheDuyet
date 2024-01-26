import React, { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
import productService from '../../../services/ProductService';
import '../styles/frontend.css'

const Posttopic = () => {
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
            <div >
                <h3>Bài viết mới:</h3>
                <div className='row'>
                    {/* Repeat this structure for each product card */}
                    {productsnew.length > 0 ? (
                        productsnew.map((product) => (
                            <section class="hdl-lastpost bg-main mt-3 py-4">
                                <div class="row mb-3">
                                    <div class="col-md-4">
                                        <a href="post_detail.html">
                                            <img class="img-fluid" src={urlImage + "product/" + product.image}
                                                    alt={product.image}/>
                                        </a>
                                    </div>
                                    <div class="col-md-8">
                                        <h3 class="post-title fs-5">
                                            <a href="post_detail.html">
                                                bài viết mói nhất về {product.name}
                                            </a>
                                        </h3>
                                        <p>bài viết mói nhất {product.name}  mói nhất về {product.name}</p>
                                    </div>
                                </div>
                            </section>
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

export default Posttopic;