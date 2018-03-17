import request from 'superagent';

/* eslint-disable-next-line import/prefer-default-export */
export const get = id => request.get(`/api/profile/${id}`).send();
