import axios from 'axios';
import { DESCRIPTION_CHANGED, TODO_SEARCH } from './types';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = event => ({
  type: DESCRIPTION_CHANGED,
  payload: event.target.valie
});

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`);

  return {
    type: TODO_SEARCH,
    payload: request
  };
};
