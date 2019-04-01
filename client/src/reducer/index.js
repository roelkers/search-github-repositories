import { ADD_BOOKMARK, DELETE_BOOKMARK,FETCH_REPOSITORIES,ERROR } from '../actions/types';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOKMARK:
    case DELETE_BOOKMARK:
      return state.map(repository => repository.id === action.repository.id ? action.repository : repository);
    case FETCH_REPOSITORIES:
      return action.repositories
    case ERROR:
      return action.msg 
    default:
      return state;
  }
}