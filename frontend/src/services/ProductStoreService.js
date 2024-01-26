import httpAxios from "../httpAxios";
const ProductStoreService = {
    index: () => {
        return httpAxios.get(`productstore/index`);
    },
    show: (id)=>{
        return httpAxios.get(`productstore/show/${id}`);
    },
    store: (data) =>{
        return httpAxios.post(`productstore/store`, data);
    },
    update: (data, id )=> {
        return httpAxios.post(`productstore/update/${id}`, data)
    },
    destroy: (id)=> {
        return httpAxios.delete(`productstore/delete/${id}`);
    },
    status: (id) =>{
        return httpAxios.get(`productstore/status/${id}`);
    },
}
export default ProductStoreService;