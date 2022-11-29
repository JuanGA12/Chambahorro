import http from "../http-common";
import TokenService from "./TokenService";

const token = TokenService.getToken();
const cabecera = { headers: {"Authorization" : `Bearer ${token}`} }

const getAll = () => {
    return http.get(`/state/getAll`, cabecera);
};

const get = id => {
    return http.get(`/state/get/${id}`, cabecera);
};

const save = data => {
    return http.post(`/state/save`, data, cabecera);
};

const update = (id, data) => {
    return http.put(`/state/update/${id}`, data, cabecera);
};

const remove = id => {
    return http.delete(`/state/delete/${id}`, cabecera);
};

export default { getAll, get, save, update, remove };