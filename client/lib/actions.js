import { client } from './with-apollo';
import { GET_API } from './api';
import * as types from './actionTypes';

export const getCompanyList = () => {
  console.log("dispatch")
  return dispatch => {
  client
  .query({
    query: GET_API,
    fetchPolicy: 'no-cache'
  })
  .then(result => {
    dispatch({
      type: types.GET_UNIVERSITY_LIST,
      universityList: result ? result : [],
    });

  })
  .catch(err => console.log(err))
  }
};
