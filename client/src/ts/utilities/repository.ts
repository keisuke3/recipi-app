import axios from 'axios';

const IS_DEVELOPMENT = process.env.NODE_ENV;
const mode = IS_DEVELOPMENT === 'development' ? '/mock' : '/api';
const baseURL = `https://asia-northeast1-recipi-app-2bf39.cloudfunctions.net${mode}`;

export const repository = axios.create({
  baseURL,
});
