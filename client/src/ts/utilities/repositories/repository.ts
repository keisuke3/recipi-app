import axios from 'axios';

const isEmulating = window.location.hostname === 'localhost';
const productionURL = 'https://asia-northeast1-recipi-app-2bf39.cloudfunctions.net/api';
const emulatorURL = 'http://localhost:5001/recipi-app-2bf39/asia-northeast1/api';
const baseURL = isEmulating ? emulatorURL : productionURL;

export const repository = axios.create({
  baseURL,
});
