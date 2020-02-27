import axios from 'axios';

export const sendQuestion = async (payload) => {
    return await axios.post('http://localhost:4000/api/contact', payload).then(response => response.data);
};