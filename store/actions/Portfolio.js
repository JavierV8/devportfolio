import axios from 'axios';
import Cookies from 'js-cookie';

export const createPortfolio = async (payload) => {
    return await axios.post('http://localhost:4000/api/portafolio', payload).then(response => response.data);
};
export const getPortfolios = async () => {
    return await axios.get('http://localhost:4000/api/portafolio').then(response => response.data);
}
export const deletePortfolio = (portfolioId) => {
    const token = Cookies.get('token');
    const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    }
    return axios.delete(`http://localhost:4000/api/portafolio/${portfolioId}`, { headers: headers }).then(response => response.data);
}
export const getPortfolioById = async (id) => {
    return await axios.get(`http://localhost:4000/api/portafolio/${id}`).then(response => response.data);
}
export const updatePortfolio = async (portfolioData) => {
    return await axios.patch(`http://localhost:4000/api/portafolio/${portfolioData._id}`, portfolioData)
        .then(response => response.data)
        .catch(error => rejectPromise(error))
}