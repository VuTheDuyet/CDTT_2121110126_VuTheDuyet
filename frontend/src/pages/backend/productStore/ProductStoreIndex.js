import { useEffect, useState } from 'react';
import ProductService from '../../../services/ProductService';
import { urlImage } from '../../../config';
import LoadingSpinner from '../../../LoadingSpinner';
import { FaEdit, FaEye, FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';

const ProductIndex = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    const [reload, setReload] = useState(0);
    // 
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState(0);
    const [status, setStatus] = useState(1);
    // 
    useEffect(() => {
        (async () => {
            const result = await ProductService.index();
            setProducts(result.products);
            setLoad(true);
        })();
    }, [reload]);

    //xử lý thêm product
    const handleSubmit = (e) => {
        e.preventDefault();
        const image = document.getElementById("image");
        const product = new FormData();
        product.append("name", name);
        product.append("description", description);
        product.append("price", price);
        product.append("detail", detail);
        product.append("status", status);
        product.append("image", image.files.length === 0 ? "" : image.files[0]);

        (async () => {
            const result = await ProductService.store(product);
            alert(result.message);
            setReload(result.product.id);
        })();
    };

    const handleStatus = (id) => {
        console.log(id);
        (async () => {
            try {
                const result = await ProductService.status(id);
                setReload(Date.now());
                if (result) {
                    toast.success(result.message);
                }
            } catch (error) {
                console.error("Error changing status:", error);
                toast.error("Error changing status");
            }
        })();
    };

    const handDelete = (id) => {
        (async () => {
            const result = await ProductService.destroy(id);
            setReload(result.product.id)
        })();
    }

    return (
        <>
            <section className="hdl-content">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-12">
                            {/* <!--CONTENT  --> */}
                            <div className="content">
                                <section className="content-header my-2">
                                    <h1 className="d-inline">Tất cả sản phẩm</h1>
                                    <hr style={{ border: 'none' }} />
                                </section>
                                <section className="content-body my-2">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <form onSubmit={handleSubmit}>

                                                <div className="mb-3 text-end">
                                                    <button className="btn btn-success">
                                                        <a href={`/admin/product/create`}>
                                                            <i className="fa fa-save"></i> [Thêm Sản Phẩm]
                                                        </a>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row mt-3 align-items-center">
                                                <div className="col-12">
                                                    <ul className="manager">
                                                        <li><a href="product_index.html">Tất cả (123)</a></li>
                                                        <li><a href="#nt">Xuất bản (12)</a></li>
                                                        <li><a href="product_trash.html">Rác (12)</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row my-2 align-items-center">
                                                <div className="col-md-6">
                                                    <select name="" className="d-inline me-1">
                                                        <option value="">Hành động</option>
                                                        <option value="">Bỏ vào thùng rác</option>
                                                    </select>
                                                    <button className="btnapply">Áp dụng</button>
                                                </div>
                                                <div className="col-md-6 text-end">
                                                    <input type="text" className="search d-inline" />
                                                    <button className="btnsearch d-inline">Tìm kiếm</button>
                                                </div>
                                            </div>
                                            {!load && <LoadingSpinner />}
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center" style={{ width: '30px' }}>
                                                            <input type="checkbox" id="checkboxAll" />
                                                        </th>
                                                        <th className="text-center" style={{ width: '90px' }}>Hình ảnh</th>
                                                        <th>Tên danh mục</th>
                                                        <th>Tên slug</th>
                                                        <th className="text-center" style={{ width: '30px' }}>ID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {products && products.length > 0 &&
                                                        products.map((product, index) => {
                                                            return (
                                                                <tr className="datarow" key={index}>
                                                                    <td className="text-center">
                                                                        <input type="checkbox" />
                                                                    </td>
                                                                    <td>
                                                                        <img className="img-fluid"
                                                                            src={urlImage + "product/" + product.image}
                                                                            alt={product.image} />
                                                                    </td>
                                                                    <td>
                                                                        <div className="name">
                                                                            <a href="#nt">
                                                                                {product.name}
                                                                            </a>
                                                                        </div>
                                                                        <div className="function_style">
                                                                            <button>
                                                                                <a href={`/admin/product/edit/${product.id}`} className="px-1 text-success">
                                                                                    <FaEdit />
                                                                                </a>
                                                                            </button>
                                                                            <button
                                                                                onClick={() => handleStatus(product.id)}
                                                                                className={product.status === 1 ? "text-success" : "text-danger"}
                                                                            >
                                                                                {product.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                                                                            </button>
                                                                            <button>
                                                                                <a href="product_show.html" className="px-1 text-info">
                                                                                    <FaEye />
                                                                                </a>
                                                                            </button>
                                                                            <button
                                                                                onClick={() => handDelete(product.id)}
                                                                                className="btn-none text-danger">
                                                                                <FaTrash />
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                    <td>{product.slug}</td>
                                                                    <td className="text-center">{product.id}</td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </section>
                            </div>
                            {/* <!--END CONTENT--> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default ProductIndex;