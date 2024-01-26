import httpAxios from "../httpAxios";
const OrderDetailService = {
    index: () => {
        return httpAxios.get(`orderdetail/index`);
    },
    show: (id)=>{
        return httpAxios.get(`orderdetail/show/${id}`);
    },
    store: (data) =>{
        return httpAxios.post(`orderdetail/store`, data);
    },
    update: (data, id )=> {
        return httpAxios.post(`orderdetail/update/${id}`, data)
    },
    destroy: (id)=> {
        return httpAxios.delete(`orderdetail/delete/${id}`);
    },
    status: (id) =>{
        return httpAxios.get(`orderdetail/status/${id}`);
    },
}
export default OrderDetailService;