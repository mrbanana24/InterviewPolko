import axios from 'axios';
const url = 'http://localhost:8000';


// Post para agregar un arroz
export const addArroz = (arroz) => {
  return axios.post(`${url}/arroz`, arroz);
}

// Get para obtener todos los arroces
export const getArroces = () => {
  return axios.get(`${url}/arroz`);
}

// Post para agregar una gaseosa
export const addGaseosa = () => {
  return axios.post(`${url}/gaseosa`);
}

// Get para obtener todas las gaseosas
export const getGaseosas = () => {
  return axios.get(`${url}/gaseosa`);
}

// Post para agregar un fernet
export const addFernet = () => {
  return axios.post(`${url}/fernet`);
}

// Get para obtener todos los fernets
export const getFernets = () => {
  return axios.get(`${url}/fernet`);
}

// Post para agregar un pan
export const addPan = () => {
  return axios.post(`${url}/pan`);
}

// Get para obtener todos los panes
export const getPanes = () => {
  return axios.get(`${url}/pan`);
}

// Post para agregar un cafe
export const addCafe = () => {
  return axios.post(`${url}/cafe`);
}

// Get para obtener todos los cafes
export const getCafes = () => {
  return axios.get(`${url}/cafe`);
}


