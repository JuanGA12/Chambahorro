import http from "../http-common";
import TokenService from "./TokenService";

const token = TokenService.getToken();
const cabecera = { headers: {"Authorization" : `Bearer ${token}`} }

const getAll = () => {
    return http.get(`/revision/getAll`, cabecera);
};

const get = id => {
    return http.get(`/revision/get/${id}`, cabecera);
};

const getByIdUsuario = id => {
    return http.get(`/revision/getByIdUsuario/${id}`, cabecera);
};


const save = data => {
    return http.post(`/revision/save`, data, cabecera);
};

const update = (id, data) => {
    return http.put(`/revision/update/${id}`, data, cabecera);
};

const remove = id => {
    return http.delete(`/revision/delete/${id}`, cabecera);
};

export default { getAll, get, getByIdUsuario, save, update, remove };