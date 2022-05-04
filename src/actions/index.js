import jsonPlaceholder from '../apis/jsonPlaceholder';

//ASYNC ACTION CREATOR WITH REDUX THUNK
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};
