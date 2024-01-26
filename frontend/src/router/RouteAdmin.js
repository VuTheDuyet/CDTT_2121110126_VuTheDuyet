import BrandEdit from "../pages/backend/brand/BrandEdit"
import BrandIndex from "../pages/backend/brand/BrandIndex"
import CategoryEdit from "../pages/backend/category/CategoryEdit"
import CategoryIndex from "../pages/backend/category/CategoryIndex"
import productEdit from "../pages/backend/product/ProductEdit"
import ProductIndex from "../pages/backend/product/ProductIndex"
import ProductCreate from "../pages/backend/product/ProductCreate"
import OrderIndex from "../pages/backend/order/OrderIndex"
import ProductImport from "../pages/backend/product/ProductImport"
import ProductSale from "../pages/backend/product/ProductSale"
import PostIndex from "../pages/backend/post/PostIndex"
import PostCreate from "../pages/backend/post/PostCreate"
import PostEdit from "../pages/backend/post/PostEdit"
import PostTrash from "../pages/backend/post/PostTrash"
import TopicIndex from "../pages/backend/topic/TopicIndex"



const RouteAdmin = [
    { path: '/admin/brand/index', component: BrandIndex },
    { path: '/admin/brand/edit/:id', component: BrandEdit },

    { path: '/admin/category/index', component: CategoryIndex },
    { path: '/admin/category/edit/:id', component: CategoryEdit },

    { path: '/admin/product/index', component: ProductIndex },
    { path: '/admin/product/create', component: ProductCreate },
    { path: '/admin/product/import', component: ProductImport },
    { path: '/admin/product/sale', component: ProductSale },
    { path: '/admin/product/edit/:id', component: productEdit },

    { path: '/admin/banner/index', component: ProductCreate },
    { path: '/admin/banner/create', component: ProductCreate },

    { path: '/admin/contact/index', component: ProductCreate },
    { path: '/admin/contact/create', component: ProductCreate },

    { path: '/admin/menu/index', component: ProductCreate },
    { path: '/admin/menu/create', component: ProductCreate },

    { path: '/admin/order/index', component: OrderIndex },
    { path: '/admin/order/create', component: ProductCreate },

    { path: '/admin/orderdetail/index', component: ProductCreate },
    { path: '/admin/orderdetail/create', component: ProductCreate },

    { path: '/admin/post/index', component: PostIndex },
    { path: '/admin/post/create', component: PostCreate },
    { path: '/admin/post/edit/:id', component: PostEdit },
    { path: '/admin/post/trash', component: PostTrash },

    { path: '/admin/productstore/index', component: ProductCreate },
    { path: '/admin/productstore/create', component: ProductCreate },

    { path: '/admin/productsale/index', component: ProductCreate },
    { path: '/admin/productsale/create', component: ProductCreate },

    { path: '/admin/topic/index', component: TopicIndex },
    { path: '/admin/topic/create', component: ProductCreate },

    { path: '/admin/user/index', component: ProductCreate },
    { path: '/admin/user/create', component: ProductCreate },
    // { path: '/admin/productss/create', component: ProductCreate },
    // { path: '/admin/productss/create', component: ProductCreate },
    // { path: '/admin/productss/create', component: ProductCreate },
]
export default RouteAdmin;