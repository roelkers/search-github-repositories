import { ADD_BOOKMARK, DELETE_BOOKMARK, FETCH_REPOSITORIES, ERROR } from './types';

export const addBookmark = (id) => {
  return (dispatch) => {

    return fetch(`/api/bookmarks`, {
      method: 'PUT',
      body: JSON.stringify({ repository_id: id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch(
          { type: ADD_BOOKMARK, repository : json })
      })
      .catch(err => dispatch(
        { type: ERROR, msg: err }))
  }
}

export const deleteBookmark = (id) => {
  return (dispatch) => {

    return fetch(`/api/bookmarks`, {
      method: 'DELETE',
      body: JSON.stringify({ repository_id: id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch(
          { type: DELETE_BOOKMARK, repository : json })
      })
      .catch(err => dispatch(
        { type: ERROR, msg: err }))
  }
}

export const fetchRepositories = (searchTerm) => {

  return (dispatch) => {
    return fetch(`/api/repositories/search/${searchTerm}`)
      .then(response => response.json())
      .then(json => {
        dispatch(
          { type: FETCH_REPOSITORIES, repositories: json })
      })
      .catch(err => dispatch(
        { type: ERROR, msg: "Unable to fetch data" }))
  }

}