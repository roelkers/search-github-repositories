import reducer from '.'
import * as types from '../actions/types'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle FETCH_REPOSITORIES', () => {
    expect(
      reducer([], {
        type: types.FETCH_REPOSITORIES,
        repositories: [{id : 1, name : "example_repository"}]
      })
    ).toEqual([{id : 1, name : "example_repository"}])
    })

it('should handle ADD_BOOKMARK', () => {
    expect(
      reducer([{id : 1, name : "example_repository"}], {
        type: types.ADD_BOOKMARK,
        repository: {id : 1, name : "example_repository", bookmark : true}
      })
    ).toEqual([{id : 1, name : "example_repository", bookmark : true}])
})

it('should handle DELETE_BOOKMARK', () => {
    expect(
      reducer([{id : 1, name : "example_repository", bookmark : true}], {
        type: types.DELETE_BOOKMARK,
        repository: {id : 1, name : "example_repository", bookmark : false}
      })
    ).toEqual([{id : 1, name : "example_repository", bookmark : false}])
})
})