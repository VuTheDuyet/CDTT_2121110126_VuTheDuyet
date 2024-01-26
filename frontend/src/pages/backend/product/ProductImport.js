import { useEffect } from 'react';
import LoadingSpinner from '../../../LoadingSpinner';
import { toast , ToastContainer} from 'react-toastify';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { urlImage } from '../../../config';
import productImportService from '../../../services/ProductImportService';

const ProductImport = () => {
    // const [load, setLoad] = useState(0);
    // const [isLoading, setIsLoading] = useState(false);
    // const [products, setProducts] = useState([]);

    // useEffect(function () {
    //     setIsLoading(true);
    //     (async function () {
    //         const result = await productImportService.import('index');
    //         setProducts(result.productImport);
    //         setIsLoading(false);
    //     })();
    // }, [load]);
    // //
    // const handleImportProductById = (id) => {
    //     setIsLoading(true);
    //     const qty = document.getElementById("qty" + id).value;
    //     const price = document.getElementById("price" + id).value;
    //     const productstore = {
    //         product_id: id,
    //         qty: qty,
    //         price: price,
    //     };
    //     (async function () {
    //         const result = await productImportService.storeImport(productstore);
    //         toast.success(result.message);
    //         setLoad(Date.now());
    //         setIsLoading(false);
    //     })();
    // }
    return (
        <div className="content">
                  <section className="content-header my-2">
                     <h1 className="d-inline">Nhập sản phẩm</h1>
                     <div className="row mt-3 align-items-center">
                        <div className="col-12 text-end">
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

                     <table className="table table-bordered table-striped">
                        <thead>
                           <tr>
                              <th className="text-center" style={{width:90}}>Hình ảnh</th>
                              <th>Tên sản phẩm</th>
                              <th>Tên danh mục</th>
                              <th>Tên thương hiệu</th>
                              <th style={{width:90}} className="text-center">Số lượng</th>
                              <th style={{width:180}} className="text-center">Giá nhập</th>
                              <th style={{width:60}}></th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr className="datarow">
                              <td>
                                 <img className="img-fluid" src="" alt=""/>
                              </td>
                              <td>Ten SP</td>
                              <td>sadsa</td>
                              <td>ádsa</td>
                              <td>
                                 <input type="number" name="qty" style={{width:90}} />
                              </td>
                              <td>
                                 <input type="number" name="price" style={{width:180}} />
                              </td>
                              <td className="text-center">
                                 <button type="button" onclick="selectproduct(1)"
                                    className="btn btn-sm btn-success">Lưu</button>
                              </td>
                           </tr>
                        </tbody>
                     </table>

                  </section>
               </div>
    );
}

export default ProductImport;