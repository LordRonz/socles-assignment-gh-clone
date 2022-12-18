import axios from 'axios';

import { API_URL } from '@/lib/constant';

export const customAxios = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/vnd.github+json',
  },
});

export default customAxios;
