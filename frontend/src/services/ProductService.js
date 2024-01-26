import httpAxios from "../httpAxios";
const productService = {
    index: () => {
        return httpAxios.get(`product/index`);
    },
    show: (id)=>{
        return httpAxios.get(`product/show/${id}`);
    },
    store: (data) =>{
        return httpAxios.post(`product/store`, data);
    },
    update: (data, id )=> {
        return httpAxios.post(`product/update/${id}`, data)
    },
    destroy: (id)=> {
        return httpAxios.delete(`product/delete/${id}`);
    },
    status: (id) =>{
        return httpAxios.get(`product/status/${id}`);
    },
}
export default productService