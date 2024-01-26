import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductService from '../../../services/ProductService';
import LoadingSpinner from '../../../LoadingSpinner';
import { toast } from 'react-toastify';

const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState(0);
    const [status, setStatus] = useState(1);

    useEffect(() => {
        (async () => {
            try {
                const result = await ProductService.show(id);
                setName(result.product.name);
                setDetail(result.product.detail);
                setDescription(result.product.description);
                setPrice(result.product.price);
                setStatus(result.product.status);
            } catch (error) {
                console.error('Error fetching product data:', error);
            } finally {
                // Đã load dữ liệu xong, ẩn biểu tượng loading
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
            navigate("/admin/product/index", { replace: true });
        } catch (error) {
            console.error('Error updating the product:', error);
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="content">
                  <section className="content-header my-2">
                     <h1 className="d-inline">Blank Page</h1>
                     <a href="" className="btn btn-secondary btn-sm">Thêm mới</a>
                     <div className="row mt-3 align-items-center">
                        <div className="col-6">
                           <ul className="manager">
                              <li><a href="#">Tất cả (123)</a></li>
                              <li><a href="#">Xuất bản (12)</a></li>
                              <li><a href="#">Rác (12)</a></li>
                           </ul>
                        </div>
                        <div className="col-6 text-end">
                           <input type="text" className="search d-inline" />
                           <button className="d-inline btnsearch">Tìm kiếm</button>
                        </div>
                     </div>
                     <div className="row mt-1 align-items-center">
                        <div className="col-md-8">
                           <select name="" className="d-inline me-1">
                              <option value="">Hành động</option>
                              <option value="">Bỏ vào thùng rác</option>
                           </select>
                           <button className="btnapply">Áp dụng</button>
                           <select name="" className="d-inline me-1">
                              <option value="">Tất cả danh mục</option>
                           </select>
                           <select name="" className="d-inline me-1">
                              <option value="">Tất cả thương hiệu</option>
                           </select>
                           <button className="btnfilter">Lọc</button>
                        </div>
                        <div className="col-md-4 text-end">
                           <nav aria-label="Page navigation example">
                              <ul className="pagination pagination-sm justify-content-end">
                                 <li className="page-item disabled">
                                    <a className="page-link">&laquo;</a>
                                 </li>
                                 <li className="page-item"><a className="page-link" href="#">1</a></li>
                                 <li className="page-item"><a className="page-link" href="#">2</a></li>
                                 <li className="page-item"><a className="page-link" href="#">3</a></li>
                                 <li className="page-item">
                                    <a className="page-link" href="#">&raquo;</a>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </section>
                  <section className="content-body my-2">

                     <div className="row">
                        <div className="col-12 my-2">
                           <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                              data-bs-target="#chonkhachhang">
                              Chọn khách hàng
                           </button>
                        </div>
                     </div>
                     <div className="row" id="rowshowcustome">
                        <div className="col-md">
                           <label>Họ tên (*)</label>
                           <input type="text" name="name" className="form-control" readonly />
                        </div>
                        <div className="col-md">
                           <label>Email (*)</label>
                           <input type="text" name="email" className="form-control" readonly />
                        </div>
                        <div className="col-md">
                           <label>Điện thoại (*)</label>
                           <input type="text" name="phone" className="form-control" readonly />
                        </div>
                        <div className="col-md-5">
                           <label>Địa chỉ (*)</label>
                           <input type="text" name="address" className="form-control" readonly />
                        </div>
                        <input type="hidden" name="user_id" />
                     </div>
                     <div className="row my-3">
                        <div className="col-12 my-2">
                           <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                              data-bs-target="#chonsanpham">
                              Chọn sản phẩm
                           </button>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12">
                           <table className="table table-bordered table-striped">
                              <thead>
                                 <tr>
                                    <th className="text-center" style={{width:140}}>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Tên danh mục</th>
                                    <th>Tên thương hiệu</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                    <th></th>
                                 </tr>
                              </thead>
                              <tbody id="bodyproduct">
                                 <tr>
                                    <td>
                                       <img className="img-fluid" src="h" alt="h" />
                                    </td>
                                    <td>Hoten</td>
                                    <td>DanhMuc</td>
                                    <td>ThuongHieu</td>
                                    <td>Gia</td>
                                    <td><input style={{width:60}} name="qty[]" type="number" min="0" />
                                    </td>
                                    <td>ThanhTine</td>
                                    <td><button className="btn btn-danger btn-xs px-2">X</button>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>

                  </section>
               </div>
        </form>
    );
};
export default ProductEdit;