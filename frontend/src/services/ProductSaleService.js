import httpAxios from "../httpAxios";
const productSaleService = {
    index: () => {
        return httpAxios.get(`productsale/index`);
    },
    show: (id)=>{
        return httpAxios.get(`productsale/show/${id}`);
    },
    store: (data) =>{
        return httpAxios.post(`productsale/store`, data);
    },
    update: (data, id )=> {
        return httpAxios.post(`productsale/update/${id}`, data)
    },
    destroy: (id)=> {
        return httpAxios.delete(`productsale/delete/${id}`);
    },
    status: (id) =>{
        return httpAxios.get(`productsale/status/${id}`);
    },
}
export default productSaleService