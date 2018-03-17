import request from 'superagent';

/* eslint-disable-next-line import/prefer-default-export */
export const get = () => request.get('/api/profile').send();
