import http from "../http-common";
import TokenService from "./TokenService";

const token = TokenService.getToken();
const cabecera = { headers: {"Authorization" : `Bearer ${token}`} }

const getAll = () => {
    return http.get(`/task/getAll`, cabecera);
};

const getAllByList = (id) => {
    return http.get(`/task/getAllByList/${id}`, cabecera);
};

const get = id => {
    return http.get(`/task/get/${id}`, cabecera);
};

const save = data => {
    return http.post(`/task/save`, data, cabecera);
};

const update = (id, data) => {
    return http.put(`/task/update/${id}`, data, cabecera);
};

const remove = id => {
    return http.delete(`/task/delete/${id}`, cabecera);
};

export default { getAll, getAllByList, get, save, update, remove };