import BrandEdit from "../pages/backend/brand/BrandEdit"
import BrandIndex from "../pages/backend/brand/BrandIndex"

const RouteAdmin = [
    { path: '/admin/brand/index', component: BrandIndex },
    { path: '/admin/brand/edit/:id', component: BrandEdit }

]
export default RouteAdmin;