import http from "../http-common";
import TokenService from "./TokenService";

const token = TokenService.getToken();
const cabecera = { headers: {"Authorization" : `Bearer ${token}`} }

const getAll = () => {
    return http.get(`/comment/getAll`, cabecera);
};

const getAllByTask = (id) => {
    return http.get(`/comment/getAllByTask/${id}`, cabecera);
};

const get = id => {
    return http.get(`/comment/get/${id}`, cabecera);
};

const save = data => {
    return http.post(`/comment/save`, data, cabecera);
};

const update = (id, data) => {
    return http.put(`/comment/update/${id}`, data, cabecera);
};

const remove = id => {
    return http.delete(`/comment/delete/${id}`, cabecera);
};

export default { getAll, getAllByTask, get, save, update, remove };