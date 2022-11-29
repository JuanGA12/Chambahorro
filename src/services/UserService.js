import http from "../http-common";
import TokenService from "./TokenService";

const token = TokenService.getToken();
const cabecera = { headers: {"Authorization" : `Bearer ${token}`} }

const getAll = () => {
    return http.get(`/user/getAll`, cabecera);
};

const getAllByRuc = ruc => {
    return http.get(`/user/getAllByRuc/${ruc}`, cabecera);
};

const getEmailsByRuc = ruc => {
    return http.get(`/user/getEmailsByRuc/${ruc}`, cabecera);
};

const get = id => {
    return http.get(`/user/get/${id}`, cabecera);
};

const save = data => {
    return http.post(`/user/save`, data, cabecera);
};

const update = (id, data) => {
    return http.put(`/user/update/${id}`, data, cabecera);
};

const changePassword = (id, data) => {
    return http.put(`/user/changePassword/${id}`, data, cabecera);
};

const remove = id => {
    return http.delete(`/user/delete/${id}`, cabecera);
};

export default { getAll, getAllByRuc, getEmailsByRuc, get, save, update, changePassword, remove };