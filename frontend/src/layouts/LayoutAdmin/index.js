import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LayoutAdminStyle.css';

const LayoutAdmin = () => {
   function handleItemClick(item) {
      const hdlitem = document.getElementById(item);
      hdlitem.classList.toggle("active");
   }
    return(
        <>
            <section className="hdl-header sticky-top">
      <div className="container-fluid">
         <ul className="menutop">
            <li>
               <a href="#chuong">
                  <i className="fa-brands fa-dashcube"></i> Shop Thời trang
               </a>
            </li>
            <li className="text-phai">
               <a href="#chuong">
                  <i className="fa-solid fa-power-off"></i> Thoát
               </a>
            </li>
            <li className="text-phai">
               <a href="#chuong">
                  <i className="fa fa-user" aria-hidden="true"></i> Chào quản lý
               </a>
            </li>
         </ul>
      </div>
   </section>
   <section className="hdl-content">
      <div className="container-fluid">
         <div className="row">
            <div className="col-md-2 bg-dark p-0 hdl-left">
               <div className="hdl-left">
                  <div className="dashboard-name">
                     Bản điều khiển
                  </div>
                  <nav className="m-2 mainmenu">
                     <ul className="main">
                     <li class="hdlitem item-sub" id="item1" onClick={() => handleItemClick('item1')}>
                           <i className="fa-brands fa-product-hunt icon-left"></i>
                           <a href="#chuong">Sản phẩm</a>
                           <i className="fa-solid fa-plus icon-right"></i>
                           <ul className="submenu">
                              <li>
                                 <a href="product_index.html">Tất cả sản phẩm</a>
                              </li>
                              <li>
                                 <a href="product_import.html">Nhập hàng</a>
                              </li>
                              <li>
                                 <a href="category_index.html">Danh mục</a>
                              </li>
                              <li>
                                 <a href="brand_index.html">Thương hiệu</a>
                              </li>
                              <li>
                                 <a href="product_sale.html">Khuyễn mãi</a>
                              </li>
                           </ul>
                        </li>
                        <li className="hdlitem item-sub">
                           <i className="fa-brands fa-product-hunt icon-left"></i>
                           <a href="#chuong">Bài viết</a>
                           <i className="fa-solid fa-plus icon-right"></i>
                           <ul className="submenu">
                              <li>
                                 <a href="post_index.html">Tất cả bài viết</a>
                              </li>
                              <li>
                              <a href="topic_index.html">Chủ đề</a>
                              </li>
                              <li>
                                 <a href="page_index.html">Trang đơn</a>
                              </li>
                           </ul>
                        </li>
                        <li className="hdlitem item-sub">
                           <i className="fa-brands fa-product-hunt icon-left"></i>
                           <a href="#chuong">Quản lý bán hàng</a>
                           <i className="fa-solid fa-plus icon-right"></i>
                           <ul className="submenu">
                              <li>
                                 <a href="order_index.html">Tất cả đơn hàng</a>
                              </li>
                              <li>
                                 <a href="order_export.html">Xuất hàng</a>
                              </li>
                           </ul>
                        </li>
                        <li className="hdlitem">
                           <i className="fa-regular fa-circle icon-left"></i>
                           <a href="customer_index.html">Khách hàng</a>
                        </li>
                        <li className="hdlitem">
                           <i className="fa-regular fa-circle icon-left"></i>
                           <a href="contact_index.html">Liên hệ</a>
                        </li>
                        <li className="hdlitem item-sub">
                           <i className="fa-brands fa-product-hunt icon-left"></i>
                           <a href="#chuong">Giao diện</a>
                           <i className="fa-solid fa-plus icon-right"></i>
                           <ul className="submenu">
                              <li>
                                 <a href="menu_index.html">Menu</a>
                              </li>
                              <li>
                                 <a href="banner_index.html">Banner</a>
                              </li>
                           </ul>
                        </li>
                        <li className="hdlitem item-sub">
                           <i className="fa-brands fa-product-hunt icon-left"></i>
                           <a href="#chuong">Hệ thống</a>
                           <i className="fa-solid fa-plus icon-right"></i>
                           <ul className="submenu">
                              <li>
                                 <a href="user_index.html">Thành viên</a>
                              </li>
                              <li>
                                 <a href="config_index.html">Cấu hình</a>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
            <div className="col-md-10">
               <div className="content">
               <section className="content-header my-2">
                     <h1 className="d-inline">Blank Page</h1>
                     <a href="#chuong" className="btn btn-secondary btn-sm">Thêm mới</a>
                     <div className="row mt-3 align-items-center">
                        <div className="col-6">
                           <ul className="manager">
                              <li><a href="#chuong">Tất cả (123)</a></li>
                              <li><a href="#chuong">Xuất bản (12)</a></li>
                              <li><a href="#chuong">Rác (12)</a></li>
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
                                    <a href="#chuong" className="page-link">&laquo;</a>
                                 </li>
                                 <li className="page-item"><a className="page-link" href="#chuong">1</a></li>
                                 <li className="page-item"><a className="page-link" href="#chuong">2</a></li>
                                 <li className="page-item"><a className="page-link" href="#chuong">3</a></li>
                                 <li className="page-item">
                                    <a className="page-link" href="#chuong">&raquo;</a>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </section>
                  <section className="content-body my-2">
                        <Outlet />
                  </section>
               </div>
            </div>
         </div>
      </div>
   </section>
         
        </>
    );
    
};
export default LayoutAdmin;