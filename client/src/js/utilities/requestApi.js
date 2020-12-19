import axios from 'axios';

/**
 * APIコール関数
 * @param {Object} config axios設定
 * @returns {Promise} APIレスポンス
 */
export const requestApi = async config => {
  const IS_DEVELOPMENT = process.env.NODE_ENV;
  const mode = IS_DEVELOPMENT === 'development' ? '/mock' : '/api';
  const baseURL = `https://asia-northeast1-recipi-app-2bf39.cloudfunctions.net${mode}`;
  config.baseURL = baseURL;

  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    /*eslint no-console: "off"*/
    const { status, statusText } = error;
    console.log(`Error! HTTP Status: ${status}${statusText}`);
  }
};
