import axios from 'axios';
import { RequestData } from '../types/Request';

export const sendRequest = (data: RequestData) => {
  return axios.post('https://vlkzmn-api.onrender.com', data);
};
