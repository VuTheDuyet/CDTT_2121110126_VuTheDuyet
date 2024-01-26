import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ProductService from '../../../services/ProductService';
import BrandService from "../../../services/BrandService"
import CategoryService from "../../../services/CategoryService"
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const PostTrash = () => {
    // const navigate = useNavigate();
    // const [categorys, setCategorys] = useState([]);
    // const [brands, setBrands] = useState([]);
    // const [name, setName] = useState('');
    // const [categoryid, setCategoryId] = useState(null);
    // const [brandid, setBrandId] = useState(null);
    // const [detail, setDetail] = useState('');
    // const [price, setPrice] = useState('');
    // const [status, setStatus] = useState(2);
    // const [description, setDescription] = useState('');

    // //category-brand
    // useEffect(function () {
    //     (async function () {
    //         const result_category = await CategoryService.index('index');
    //         const result_brand = await BrandService.index('index');
    //         setCategorys(result_category.categories);
    //         setBrands(result_brand.brands);
    //     })();
    // }, [])
    // //store
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const image = document.querySelector("#image");
    //     var product = new FormData();
    //     product.append('name', name);
    //     product.append('detail', detail);
    //     product.append('category_id', categoryid);
    //     product.append('brand_id', brandid);
    //     product.append('price', price);
    //     product.append("description", description);
    //     product.append('status', status);
    //     product.append("image", (image.files.length === 0) ? "" : image.files[0]);
    //     (async function () {
    //         const result = await ProductService.store(product);
    //         if (result.status === true) {
    //             toast.success(result.message);
    //             navigate('/admin/product/index', { replace: true });
    //         }
    //     })();
    // }
    return (
        <form >
            <div className="content">
                  <section className="content-header my-2">
                     <h1 className="d-inline">Thùng rác bài viết</h1>
                     <div className="row mt-3 align-items-center">
                        <div className="col-6">
                           <ul className="manager">
                              <li><a href="post_index.html">Tất cả (123)</a></li>
                              <li><a href="#">Xuất bản (12)</a></li>
                              <li><a href="post_trash.html">Rác (12)</a></li>
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
                              <option value="">Chủ đề</option>
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

                     <table className="table table-bordered">
                        <thead>
                           <tr>
                              <th className="text-center" style={{width:30}}>
                                 <input type="checkbox" id="checkboxAll" />
                              </th>
                              <th className="text-center" style={{width:130}}>Hình ảnh</th>
                              <th>Tiêu đề bài viết</th>
                              <th>Tên danh mục</th>
                              <th className="text-center" style={{width:30}}>ID</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr className="datarow">
                              <td>
                                 <input type="checkbox" id="checkId" />
                              </td>
                              <td>
                                 <img className="img-fluid" src="public/images/post.jpg" alt="post.jpg"/>
                              </td>
                              <td>
                                 <div className="name">
                                    <a href="post_edit.html">
                                       Tiêu đề bài viết
                                    </a>
                                 </div>
                                 <div className="function_style">
                                    <a href="#" className="text-primary mx-1">
                                       <i className="fa fa-undo"></i>
                                    </a>
                                    <a href="#" className="text-danger mx-1">
                                       <i className="fa fa-trash"></i>
                                    </a>
                                 </div>
                              </td>
                              <td>Tên chủ đề</td>
                              <td className="text-center">1</td>
                           </tr>
                        </tbody>
                     </table>

                  </section>
               </div>
        </form>
    );
}
export default PostTrash;