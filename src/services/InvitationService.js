import http from "../http-common";
import TokenService from "./TokenService";

const token = TokenService.getToken();
const cabecera = { headers: {"Authorization" : `Bearer ${token}`} }

const getAll = () => {
    return http.get(`/invitation/getAll`, cabecera);
};

const getAllByRuc = ruc => {
    return http.get(`/invitation/getAllByRuc/${ruc}`, cabecera);
};

const get = id => {
    return http.get(`/invitation/get/${id}`, cabecera);
};

const save = data => {
    return http.post(`/invitation/save`, data, cabecera);
};

const save2 = data => {
    return http.post(`/invitation/save2`, data, cabecera);
};

const update = (id, data) => {
    return http.put(`/invitation/update/${id}`, data, cabecera);
};


const remove = id => {
    return http.delete(`/invitation/delete/${id}`, cabecera);
};

export default { getAll, getAllByRuc, get, save, save2, update, remove };