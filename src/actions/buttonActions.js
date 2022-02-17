import { ELEVATE } from '../actionTypes';

export const lift = (e) => dispatch => {
  const name = e.target.getAttribute('name');
  //console.warn(e);
  //console.log(name);
  dispatch({ type: ELEVATE, name });
}

