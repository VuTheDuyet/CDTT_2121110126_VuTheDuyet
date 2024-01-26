import React from 'react';
import '../styles/frontend.css'; // Import the custom styles
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../../../asset/image/chanel.jpeg'
import Header from './Header';
import Posttopic from './posttopic';
const Main = () => {
   return (
      <>
         <body>
            <section class="hdl-header" >
               <div class="container">
                  <div class="row">
                     <div class="col-6 col-sm-6 col-md-2 py-1">
                        <a href="/">
                           <img src={Logo} class="img-fluid" alt="Logo" />
                        </a>
                     </div>
                     <div class="col-12 col-sm-9 d-none d-md-block col-md-5 py-3">
                        <div class="input-group mb-3">
                           <input type="text" class="form-control" placeholder="Nhập nội dung tìm kiếm"
                              aria-label="Recipient's username" aria-describedby="basic-addon2" />
                           <span class="input-group-text bg-main" id="basic-addon2">
                              <i class="fa fa-search" aria-hidden="true"></i>
                           </span>
                        </div>
                     </div>
                     <div class="col-12 col-sm-12 d-none d-md-block col-md-4 text-center py-2">
                        <div class="call-login--register border-bottom">
                           <ul class="nav nav-fills py-0 my-0">
                              <li class="nav-item">
                                 <a class="nav-link" href="login.html">
                                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                                    0393925100
                                 </a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/login">Đăng nhập</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="register.html">Đăng ký</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="profile.html">Vũ Thế Duỵet</a>
                              </li>
                           </ul>
                        </div>
                        <div class="fs-6 py-2">
                           ĐỔI TRẢ HÀNG HOẶC HOÀN TIỀN <span class="text-main">TRONG 3 NGÀY</span>
                        </div>
                     </div>
                     <div class="col-6 col-sm-6 col-md-1 text-end py-4 py-md-2">
                        <a href="cart.html">
                           <div class="box-cart float-end">
                              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                              <span>1</span>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </section>
            <section class="hdl-mainmenu bg-main">
               <div class="container">
                  <div class="row">
                     <div class="col-12 d-none d-md-block col-md-2 d-none d-md-block">
                        <div class="dropdown list-category">
                           <strong class="dropdown-toggle w-100" data-bs-toggle="dropdown" aria-expanded="false">
                              Danh mục sản phẩm
                           </strong>
                           <ul class="dropdown-menu w-100">
                              <li><a class="dropdown-item" href="product_category.html">Thời trang nam</a></li>
                              <li><a class="dropdown-item" href="product_category.html">Thời trang nữ</a></li>
                              <li><a class="dropdown-item" href="product_category.html">Thời trang trẻ em</a></li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-12 col-md-9">
                        <nav class="navbar navbar-expand-lg bg-main">
                           <div class="container-fluid">
                              <a class="navbar-brand d-block d-sm-none text-white" href="index.html">DIENLOISHOP</a>
                              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                 aria-expanded="false" aria-label="Toggle navigation">
                                 <span class="navbar-toggler-icon"></span>
                              </button>
                              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                       <a class="nav-link text-white" aria-current="page" href="/">Trang chủ</a>
                                    </li>
                                    <li class="nav-item">
                                       <a class="nav-link text-white" href="/post">Giới thiệu</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                       <a class="nav-link dropdown-toggle text-white" href="#" role="button"
                                          data-bs-toggle="dropdown" aria-expanded="false">
                                          Thời trang nam
                                       </a>
                                       <ul class="dropdown-menu">
                                          <li><a class="dropdown-item text-main" href="product_category.html">Quần jean nam</a>
                                          </li>
                                          <li><a class="dropdown-item text-main" href="product_category.html">Áo thun nam </a>
                                          </li>
                                          <li><a class="dropdown-item text-main" href="product_category.html">Sơ mi nam</a></li>
                                       </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                       <a class="nav-link dropdown-toggle text-white" href="#" role="button"
                                          data-bs-toggle="dropdown" aria-expanded="false">
                                          Thời trang nữ
                                       </a>
                                       <ul class="dropdown-menu">
                                          <li><a class="dropdown-item text-main" href="product_category.html">Váy</a></li>
                                          <li><a class="dropdown-item text-main" href="product_category.html">Đầm</a>
                                          </li>
                                          <li><a class="dropdown-item text-main" href="product_category.html">Sơ mi nữ</a></li>
                                       </ul>
                                    </li>
                                    <li class="nav-item">
                                       <a href="/posttopic" class="nav-link text-white">Bài viết</a>
                                    </li>
                                    <li class="nav-item">
                                       <a href="/contact" class="nav-link text-white">Liên hệ</a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
            </section>
            <section class="hdl-slideshow">
               <div id="carouselExample" class="carousel slide">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <img src="public/images/banner/slider_1.jpg" class="d-block w-100" alt="..." />
                     </div>
                     <div class="carousel-item">
                        <img src="public/images/banner/slider_2.jpg" class="d-block w-100" alt="..." />
                     </div>
                     <div class="carousel-item">
                        <img src="public/images/banner/slider_3.jpg" class="d-block w-100" alt="..." />
                     </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Next</span>
                  </button>
               </div>
            </section>
            <Header></Header>
            
            <section class="hdl-lastpost bg-main mt-3 py-4">
               <div class="container">
                  <div class="row">
                     <div class="col-md-9">
                        <h3>BÀI VIẾT MỚI</h3>
                        <div class="row">
                           <div class="col-md-6">
                              <a href="post_detail.html">
                                 <img class="img-fluid" src="public/images/post/post-4.webp" />
                              </a>
                              <h3 class="post-title fs-4 py-2">
                                 <a href="post_detail.html">
                                    Tieu đề bài viết mói nhất 1
                                 </a>
                              </h3>
                              <p>Tieu đề bài viết mói nhất 1Tieu đề bài viết mói nhất 1Tieu đề bài viết mói nhất 1Tieu đề bài
                                 viết mói nhất 1Tieu đề bài viết mói nhất 1Tieu đề bài viết mói nhất 1Tieu đề bài viết mói nhất
                                 1Tieu đề bài viết mói nhất 1Tieu đề bài viết mói nhất 1Tieu đề bài viết mói nhất 1</p>
                           </div>
                           <div class="col-md-6">
                              
<Posttopic></Posttopic>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-3">FACEBOOK</div>
                  </div>
               </div>
            </section>
            <section class="hdl-footer pb-4">
               <div class="container">
                  <div class="row">
                     <div class="col-md-4 pt-4">
                        <h3 class="widgettilte">CHÚNG TÔI LÀ AI ?</h3>
                        <p class="pt-1">
                           Copyright@ 2024 DienloiShop là hệ thống bán sĩ và lẽ thời trang nam, nữ, trẻ em và quần áo thể thao,
                           mong muốn đem đến chất lượng tốt nhất cho khách hàng.
                        </p>
                        <p class="pt-1">
                           Địa chỉ: B216A, KP Bình Phước, Phường Bình Nhâm, TP. Thuận An, Bình Dương
                        </p>
                        <p class="pt-1">
                           Điện thoại: 0985 608 759(call, zalo) - Email: dienloisoft@gmail.com
                        </p>
                        <h3 class="widgettilte">MẠNG XÃ HỘI</h3>
                        <div class="social my-3">
                           <div class="facebook-icon">
                              <a href="#">
                                 <i class="fab fa-facebook-f"></i>
                              </a>
                           </div>
                           <div class="instagram-icon">
                              <a href="#">
                                 <i class="fab fa-instagram"></i>
                              </a>
                           </div>
                           <div class="google-icon">
                              <a href="#">
                                 <i class="fab fa-google"></i>
                              </a>
                           </div>
                           <div class="youtube-icon">
                              <a href="#">
                                 <i class="fab fa-youtube"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-4 pt-4">
                        <h3 class="widgettilte">
                           <strong>Liên hệ</strong>
                        </h3>
                        <ul class="footer-menu">
                           <li><a href="index.html">Trang chủ</a></li>
                           <li><a href="post_page.html">Giới thiệu</a></li>
                           <li><a href="product.html">Sản phẩm</a></li>
                           <li><a href="post_topic.html">Bài viết</a></li>
                           <li><a href="contact.html">Liên hệ</a></li>
                        </ul>
                     </div>
                     <div class="col-md-4 pt-4 text-end">
                        <h3 class="fs-5 text-end">
                           <strong>Lượt truy cập</strong>
                        </h3>
                        <p class="my-1">9888 lượt</p>
                     </div>
                  </div>
               </div>
            </section>
            <section class="dhl-copyright bg-dark py-3">
               <div class="container text-center text-white">
                  Thiết kế bởi: Hồ Diên Lợi - Phone: 0998765432
               </div>
            </section>
         </body>
      </>
   )
}
export default Main