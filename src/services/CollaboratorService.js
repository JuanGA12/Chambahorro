import http from "../http-common";
import TokenService from "./TokenService";

const token = TokenService.getToken();
const cabecera = { headers: {"Authorization" : `Bearer ${token}`} }

const getAll = () => {
    return http.get(`/collaborator/getAll`, cabecera);
};

const getAllByBoard = (idTablero) => {
    return http.get(`/collaborator/getAllByBoard/${idTablero}`, cabecera);
};

const get = id => {
    return http.get(`/collaborator/get/${id}`, cabecera);
};

const save = data => {
    return http.post(`/collaborator/save`, data, cabecera);
};

const update = (id, data) => {
    return http.put(`/collaborator/update/${id}`, data, cabecera);
};

const remove = id => {
    return http.delete(`/collaborator/delete/${id}`, cabecera);
};

export default { getAll, getAllByBoard, get, save, update, remove };