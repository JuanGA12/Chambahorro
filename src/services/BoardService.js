import http from "../http-common";
import TokenService from "./TokenService";

const token = TokenService.getToken();
const cabecera = { headers: {"Authorization" : `Bearer ${token}`} }

const getAll = () => {
    return http.get(`/board/getAll`, cabecera);
};

const getAllByRuc = ruc => {
    return http.get(`/board/getAllByRuc/${ruc}`, cabecera);
};

const get = id => {
    return http.get(`/board/get/${id}`, cabecera);
};

const save = data => {
    return http.post(`/board/save`, data, cabecera);
};

const update = (id, data) => {
    return http.put(`/board/update/${id}`, data, cabecera);
};

const remove = id => {
    return http.delete(`/board/delete/${id}`, cabecera);
};

export default { getAll, getAllByRuc, get, save, update, remove };