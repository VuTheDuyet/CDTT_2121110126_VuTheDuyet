import { FaHome } from "react-icons/fa";
import Main from "../pages/frontend/Main/Home";
import ProductDetail from "../pages/frontend/product/ProductDetail";
import post from "../pages/frontend/Main/post";
import contact from "../pages/frontend/Main/contact";
import postpage from "../pages/frontend/Main/postpage";
import Login from "../pages/frontend/Main/login";

const RouteSite = [
    { path: '/', component: Main},
    { path: '/product/detail/:id', component: ProductDetail },
    { path: '/post', component: post },
    { path: '/contact', component: contact },
    { path: '/posttopic', component: postpage },
    { path: '/login', component: Login },
    { path: '/posttopic', component: postpage },
    { path: '/posttopic', component: postpage },

];
export default RouteSite;