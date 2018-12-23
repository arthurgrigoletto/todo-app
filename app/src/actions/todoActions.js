import { DESCRIPTION_CHANGED } from "./types";

export const changeDescription = event => ({
  type: DESCRIPTION_CHANGED,
  payload: event.target.valie
});


