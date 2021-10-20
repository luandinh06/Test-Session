import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants/index';
import queryString from 'query-string';

// const url = 'phones';

export const getList = (resource, ID = null, params = {}) => {
    let queryParams = '';
    let queryID = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${queryString.stringify(params)}`;
    }
    if (ID) {
        queryID = `/${ID}`;
    }
    return axiosService.get(`${API_ENDPOINT}/${resource}${queryID}${queryParams}`);
};

export const addTask = (resource, data) => {
    return axiosService.post(`${API_ENDPOINT}/${resource}`, data);
};

// http://localhost:3000/tasks/:id method PUT
export const updateTask = (resource, data, taskID) => {
    return axiosService.put(`${API_ENDPOINT}/${resource}/${taskID}`, data);
};

// http://localhost:3000/tasks/:id method DELETE
export const deleteTask = (resource, taskID) => {
    return axiosService.delete(`${API_ENDPOINT}/${resource}/${taskID}`);
};