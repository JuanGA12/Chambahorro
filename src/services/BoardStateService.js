import http from "../http-common";
import TokenService from "./TokenService";

const token = TokenService.getToken();
const cabecera = { headers: {"Authorization" : `Bearer ${token}`} }

const getAll = () => {
    return http.get(`/boardState/getAll`, cabecera);
};

const getAllByBoard = (id) => {
    return http.get(`/boardState/getAllByBoard/${id}`, cabecera);
};

const get = id => {
    return http.get(`/boardState/get/${id}`, cabecera);
};

const save = data => {
    return http.post(`/boardState/save`, data, cabecera);
};

const update = (id, data) => {
    return http.put(`/boardState/update/${id}`, data, cabecera);
};

const remove = id => {
    return http.delete(`/boardState/delete/${id}`, cabecera);
};

export default { getAll, getAllByBoard, get, save, update, remove };