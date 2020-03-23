
import axios from 'axios';
import Cookies from 'js-cookie';
import * as actionType from './actionType';

export const createPortfolio = async (payload) => {
    return await axios.post(actionType.URL + 'portafolio', payload).then(response => response.data);
};
export const getPortfolios = async () => {
    return await axios.get(actionType.URL + 'portafolio').then(response => response.data);
}
export const deletePortfolio = (portfolioId) => {
    const token = Cookies.get('token');
    const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    }
    return axios.delete(`${actionType.URL}portafolio/${portfolioId}`, { headers: headers }).then(response => response.data);
}
export const getPortfolioById = async (id) => {
    return await axios.get(`${actionType.URL}portafolio/${id}`).then(response => response.data);
}
export const updatePortfolio = async (portfolioData) => {
    const token = Cookies.get('token');
    const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    }
    return await axios.patch(`${actionType.URL}portafolio/${portfolioData._id}`, portfolioData, { headers: headers })
        .then(response => response.data)
        .catch(error => rejectPromise(error))
}