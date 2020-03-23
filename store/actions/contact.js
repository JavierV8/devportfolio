import axios from 'axios';
import * as actionType from './actionType';

export const sendQuestion = async (payload) => {
    return await axios.post(actionType.URL + 'contact', payload).then(response => response.data);
};