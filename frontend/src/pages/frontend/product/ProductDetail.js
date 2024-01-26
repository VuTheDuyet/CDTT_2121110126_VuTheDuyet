import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductService from '../../../services/ProductService';
import LoadingSpinner from '../../../LoadingSpinner';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState(0);
    const [status, setStatus] = useState(1);
    const [imageUrl, setImageUrl] = useState(""); // Thêm state để lưu đường dẫn hình ảnh

    useEffect(() => {
        (async () => {
            try {
                const result = await ProductService.show(id);
                setName(result.product.name);
                setDetail(result.product.detail);
                setDescription(result.product.description);
                setPrice(result.product.price);
                setStatus(result.product.status);
                setImageUrl(result.product.imageUrl); // Set đường dẫn hình ảnh từ dữ liệu fetch
            } catch (error) {
                console.error('Error fetching product data:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const image = document.getElementById("image");
        const product = new FormData();
        product.append("name", name);
        product.append("detail", detail);
        product.append("description", description);
        product.append("price", price);
        product.append("status", status);
        product.append("image", image.files.length === 0 ? "" : image.files[0]);

        try {
            const result = await ProductService.update(product, id);
            toast.success(result.message);
            navigate("/", { replace: true });
        } catch (error) {
            console.error('Error updating the product:', error);
        }
    };

    return (
        <div className="content">
            <section className="content-header my-2">
                <div className="text-end">
                    <a href="/" className="btn btn-sm btn-success">
                        <i className="fa fa-arrow-left"></i> Về danh sách
                    </a>
                </div>
            </section>
            <section className="content-body my-2">
                {loading && <LoadingSpinner />}
                <div className="row">
                    <div className="col-md-9">
                        <div className="mb-3">
                            <h2><strong>Tên sản phẩm: </strong>{name}</h2>
                        </div>
                        <div className="mb-3">
                            <h4><strong>Chi tiết: </strong>{detail}</h4>
                        </div>
                        <div className="mb-3">
                            <h4><strong>Giá: </strong>{price}</h4>
                        </div>
                        <div className="mb-3">
                            <h4><strong>Mô tả: </strong>{description}</h4>
                        </div>
                    </div>
                    <div className="col-md-3">


                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
