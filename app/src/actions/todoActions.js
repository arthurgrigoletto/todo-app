import axios from 'axios';
import { DESCRIPTION_CHANGED, TODO_SEARCH, TODO_ADD } from './types';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = event => ({
  type: DESCRIPTION_CHANGED,
  payload: event.target.value
});

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`);

  return {
    type: TODO_SEARCH,
    payload: request
  };
};

export const add = description => dispatch => {
  axios
    .post(URL, { description })
    .then(res =>
      dispatch({
        type: TODO_ADD,
        payload: res.data
      })
    )
    .then(resp => dispatch(search()));
};

export const markAsDone = todo => dispatch => {
  axios
    .put(`${URL}/${todo._id}`, { ...todo, done: true })
    .then(res => dispatch(search()));
};

export const markAsPending = todo => dispatch => {
  axios
    .put(`${URL}/${todo._id}`, { ...todo, done: false })
    .then(res => dispatch(search()));
};
