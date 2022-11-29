import http from "../http-common";
import TokenService from "./TokenService";

const token = TokenService.getToken();
const cabecera = { headers: {"Authorization" : `Bearer ${token}`} }

const getAll = () => {
    return http.get(`/responsible/getAll`, cabecera);
};

const getAllByBoard = (idTablero) => {
    return http.get(`/responsible/getAllByBoard/${idTablero}`, cabecera);
};

const get = id => {
    return http.get(`/responsible/get/${id}`, cabecera);
};

const save = data => {
    return http.post(`/responsible/save`, data, cabecera);
};

const update = (id, data) => {
    return http.put(`/responsible/update/${id}`, data, cabecera);
};

const remove = id => {
    return http.delete(`/responsible/delete/${id}`, cabecera);
};

export default { getAll, getAllByBoard, get, save, update, remove };