import httpAxios from "../httpAxios";
const MenuService = {
    index: () => {
        return httpAxios.get(`menu/index`);
    },
    show: (id)=>{
        return httpAxios.get(`menu/show/${id}`);
    },
    store: (data) =>{
        return httpAxios.post(`menu/store`, data);
    },
    update: (data, id )=> {
        return httpAxios.post(`menu/update/${id}`, data)
    },
    destroy: (id)=> {
        return httpAxios.delete(`menu/delete/${id}`);
    },
    status: (id) =>{
        return httpAxios.get(`menu/status/${id}`);
    },
}
export default MenuService;