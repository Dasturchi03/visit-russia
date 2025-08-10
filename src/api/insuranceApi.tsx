import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USERNAME = import.meta.env.VITE_API_USERNAME;
const PASSWORD = import.meta.env.VITE_API_PASSWORD;

const authHeader = 'Basic ' + btoa(`${USERNAME}:${PASSWORD}`);

export const fetchDictionaries = async () => {
  const response = await axios.get(`${BASE_URL}/dictionaries`, {
    headers: {
      Authorization: authHeader,
    },
  });
  return response.data;
};

export const calculatePolicy = async (payload: any) => {
  const response = await axios.post(`${BASE_URL}/calculate/`, payload, {
    headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const postPolicy = async (payload: any) => {
  const response = await axios.post(`${BASE_URL}/issue/`, payload, {
      headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json'
      }
  });
  return response.data;
}
