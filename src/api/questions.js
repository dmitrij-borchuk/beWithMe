import request from 'superagent';

/* eslint-disable-next-line import/prefer-default-export */
export const get = id => request.get(`/api/question_list/${id}`).send();
export const getPartnersLikes = id => request.get(`/api/partners_likes/${id}`).send();
export const sendAnswer = (userId, data) => request.post(`/api/partners_likes/${userId}`).send({
  question_text: data.text,
  question_id: data.id,
  f_options_list: data.options,
  f_options: data.answers,
});
