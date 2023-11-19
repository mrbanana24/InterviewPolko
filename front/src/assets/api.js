import axios from 'axios';
const url = 'http://localhost:8000';

//////////////////////// Funciones para arroz ////////////////////////
// Post para agregar un arroz
export const addArroz = (arroz) => {
  return axios.post(`${url}/arroz`, arroz);
}

// Delete para eliminar el ultimo arroz
export const deleteArroz = () => {
  return axios.delete(`${url}/arroz`);
}

// Elimina todos los arroces
export const deleteAllArroces = () => {
  return axios.delete(`${url}/arroz/all`);
}

// Get para obtener todos los arroces
export const getArroces = () => {
  return axios.get(`${url}/arroz`);
}

//////////////////////// Funciones para gaseosas ////////////////////////

// Post para agregar una gaseosa
export const addGaseosa = () => {
  return axios.post(`${url}/gaseosa`);
}

// Delete para eliminar la ultima gaseosa
export const deleteGaseosa = () => {
  return axios.delete(`${url}/gaseosa`);
}

// Elimina todas las gaseosas
export const deleteAllGaseosas = () => {
  return axios.delete(`${url}/gaseosa/all`);
}

// Get para obtener todas las gaseosas
export const getGaseosas = () => {
  return axios.get(`${url}/gaseosa`);
}


//////////////////////// Funciones para fernet ////////////////////////

// Post para agregar un fernet
export const addFernet = () => {
  return axios.post(`${url}/fernet`);
}

// Delete para eliminar el ultimo fernet
export const deleteFernet = () => {
  return axios.delete(`${url}/fernet`);
}

// Elimina todos los fernets
export const deleteAllFernets = () => {
  return axios.delete(`${url}/fernet/all`);
}

// Get para obtener todos los fernets
export const getFernets = () => {
  return axios.get(`${url}/fernet`);
}

//////////////////////// Funciones para pan ////////////////////////

// Post para agregar un pan
export const addPan = () => {
  return axios.post(`${url}/pan`);
}

// Delete para eliminar el ultimo pan
export const deletePan = () => {
  return axios.delete(`${url}/pan`);
}

// Elimina todos los panes
export const deleteAllPanes = () => {
  return axios.delete(`${url}/pan/all`);
}

// Get para obtener todos los panes
export const getPanes = () => {
  return axios.get(`${url}/pan`);
}

//////////////////////// Funciones para cafe ////////////////////////

// Post para agregar un cafe
export const addCafe = () => {
  return axios.post(`${url}/cafe`);
}

// Delete para eliminar el ultimo cafe
export const deleteCafe = () => {
  return axios.delete(`${url}/cafe`);
}

// Elimina todos los cafes
export const deleteAllCafes = () => {
  return axios.delete(`${url}/cafe/all`);
}

// Get para obtener todos los cafes
export const getCafes = () => {
  return axios.get(`${url}/cafe`);
}

// Get all products
export const getProducts = () => {
  return axios.get(`${url}/products`);
}
