import httpAxios from "../httpAxios";
const productImportService = {
    index: () => {
        return httpAxios.get(`productimport/index`);
    },
    show: (id) => {
        return httpAxios.get(`productimport/show/${id}`);
    },
    store: (data) => {
        return httpAxios.post(`productimport/store`, data);
    },
    update: (data, id) => {
        return httpAxios.post(`productimport/update/${id}`, data)
    },
    destroy: (id) => {
        return httpAxios.delete(`productimport/delete/${id}`);
    },
    status: (id) => {
        return httpAxios.get(`productimport/status/${id}`);
    },
}
export default productImportService